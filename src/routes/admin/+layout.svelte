<script lang="ts">
	// components for this layout
	import AdminNavbar from '$lib/components/Navbars/AdminNavbar.svelte';
	import Sidebar from '$lib/components/Sidebar/Sidebar.svelte';
	import HeaderStats from '$lib/components/Headers/HeaderStats.svelte';
	import FooterAdmin from '$lib/components/Footers/FooterAdmin.svelte';
	import { page } from '$app/stores';
	import { goto } from '$app/navigation';

	interface Session {
		user: {

			id: string;
			name: string;
		};
	}

	export async function load({ session }: { session: Session }) {
		// Check if the session contains a user
		if (!session.user) {
			// Redirect to the home page if no user is found in the session
			return {
				status: 302, // HTTP status code for redirection
				redirect: '/' // The URL to redirect to
			};
		}

		// If a user is found in the session, return the user data
		return {
			props: {
				user: session.user
			}
		};
	}
</script>

<div>
	<Sidebar />
	<div class="relative md:ml-64 bg-blueGray-100">
		<AdminNavbar />
		{#if $page.url.pathname !== '/admin/department'}
			<HeaderStats />
		{:else}
			<div class="relative bg-slate-500 md:pt-32 pb-16 pt-12">
				<div class="px-4 md:px-10 mx-auto w-full"></div>
			</div>
		{/if}
		<div class="px-4 md:px-10 mx-auto w-full -m-24">
			<slot />
			<FooterAdmin />
		</div>
	</div>
</div>
