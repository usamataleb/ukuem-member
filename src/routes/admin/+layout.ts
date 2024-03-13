import { redirect } from "@sveltejs/kit";
import { authenticated } from '$lib/services/auth';
import debug from "debug";
import { browser } from '$app/environment';


const log = debug("app:routes:admin:layout");

export async function load() {
	if (browser) {
		const user = window.sessionStorage.getItem("username");
		if (!authenticated && !user) {
			log("no user, redirecting to /login");
			throw redirect(301, "/");
		}
	}


}