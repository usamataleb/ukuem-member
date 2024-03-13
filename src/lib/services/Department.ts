

import { writable } from 'svelte/store';
// import axios from 'axios';
import { API_URL } from '$lib/APi_url';

interface Department  {
department_id: string;
department_name: string;
}

const store = writable<Department | null>(null);

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

// async function register(Data: User) {
// 	const { data } = await axios.post(`http://127.0.0.1:8080/user`, Data);
// 	const cookie = `Authorization="${encodeURIComponent(data)}"; path=/; Secure; SameSite=Strict`; //; HttpOnly
// 	document.cookie = cookie;
// 	await init();
// }

async function getDepartments() {
    const response = await fetch(`${API_URL}/Departments`);
    const data = await response.json();	
	await init();
	return data;
}

async function logout() {
	const cookie = `Authorization=; expires=${new Date(
		0
	).toUTCString()} path=/; Secure; SameSite=Strict`;
	document.cookie = cookie;
}

// Expose the store's value with $user
export const department = {
	subscribe: store.subscribe,
	getDepartments,	
	logout,
	init
};