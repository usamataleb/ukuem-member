import { writable } from 'svelte/store';
import axios from 'axios';
import { API_URL } from '$lib/APi_url';
import { goto } from '$app/navigation';
import { authenticated } from '$lib/services/auth';


export const session = writable({});

interface User {
  member_id: number | null;
  first_name: string;
  middle_name: string;
  last_name: string;
  username: string;
  password: string;
  email: string;
  phone_number: number | null;
  place : string;
  position: string;
  date_of_joining: string;
  position_in_ukuem: string;
  occupation: string;
  department_id: number | null;
  employer: string;
  qualification: string;
  specialization: string;
  image_field: ArrayBuffer | null;
    national_id: string;
  national_id_type: string;
  institution: string;
  monthlyCharge?: number | null;
}

interface Credential {
	username: string;
	password: string;
}

const store = writable<User | null>(null);

export function getCookie(name: string) {
	const cookieArr = document.cookie.split('; ');

	for (let i = 0; i < cookieArr.length; i++ ) {
		const cookiePair = cookieArr[i].split('=');

		if (name === decodeURIComponent(cookiePair[0])) {
			return decodeURIComponent(cookiePair[1]);
		}
	}
	return null;
}

async function init() {
	try {
		const jwt = getCookie('Authorization');
		store.set(jwt ? JSON.parse(atob(jwt.split('.')[1])) : null);
	} catch (e) {
		store.set(null);
	}
}

async function register(Data: User) {
	const { data } = await axios.post(`${API_URL}/users`, Data, { 
		'headers': { 'Content-Type': 'multipart/form-data'}});
	const cookie = `Authorization="${encodeURIComponent(data)}"; path=/; Secure; SameSite=Strict`; //; HttpOnly
	document.cookie = cookie;
	await init();
	return data;
}

async function login(credential: Credential) {
    try {
        const { data } = await axios.post(`${API_URL}/logins`, credential);

        session.set({ user: data });

		authenticated.set(true);

        goto('/admin');

        return data;

    } catch (error) {
        console.error('Login failed:', error);
        return null;
    }
}

async function getUser(id: string) {
    const response = await fetch(`${API_URL}/users/${id}`);
    const data = await response.json();	
	await init();
	return data;
}

async function logout() {
	const cookie = `Authorization=; expires=${new Date(
		0
	).toUTCString()} path=/; Secure; SameSite=Strict`;
	document.cookie = cookie;
	goto('/admin/dashboard');
	authenticated.set(false);
	localStorage.clear();
}

// Expose the store's value with $user
export const user = {
	subscribe: store.subscribe,
	register,
	login,
	logout,
	getUser,
	init
};