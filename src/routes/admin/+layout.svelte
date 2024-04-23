<script lang="ts">
	// components for this layout
	import AdminNavbar from '$lib/components/Navbars/AdminNavbar.svelte';
	import Sidebar from '$lib/components/Sidebar/Sidebar.svelte';
	import HeaderStats from '$lib/components/Headers/HeaderStats.svelte';
	import FooterAdmin from '$lib/components/Footers/FooterAdmin.svelte';
	import { page } from '$app/stores';
	import { authenticated } from '$lib/services/auth';
	import { onMount } from 'svelte';
	import type { InterfaceTypes } from '$lib/services/interfaces';
	import { fly } from 'svelte/transition';

	let cards: Array<InterfaceTypes['Card']> = [
		{
			statSubtitle: 'Total Raised',
			statTitle: 350897,
			statArrow: 'up',
			statIconName: 'fa fa-chart-bar',
			statIconColor: 'bg-red-500',
			statDescription: 'Since last month',
			statPercent: 0,
			statPercentColor: 'text-emerald-500'
		},
		{
			statSubtitle: 'All Members',
			statTitle: 924,
			statArrow: 'up',
			statPercent: 1.1,
			statPercentColor: 'text-green-500',
			statDescription: 'Until now',
			statIconName: 'fas fa-users',
			statIconColor: 'bg-pink-500'
		},
		{
			statSubtitle: 'Monthly Contribution',
			statTitle: 2356,
			statArrow: '',
			statPercent: 0,
			statPercentColor: 'text-red-500',
			statDescription: '',
			statIconName: 'fas fa-dollar-sign',
			statIconColor: 'bg-orange-500'
		},
		{
			statSubtitle: 'Outstading bill',
			statTitle: 4965,
			statArrow: '',
			statPercent: 100,
			statPercentColor: 'text-emerald-500',
			statDescription: '',
			statIconName: 'fas fa-truck-loading',
			statIconColor: 'bg-emerald-500'
		}
	];

	let admin: boolean;

	onMount(() => {
		admin = localStorage.getItem('position_in_ukuem') === 'Secretary';
	});
</script>

{#if $authenticated}
	<div transition:fly={{ delay: 250, duration: 300 }}>
		<Sidebar {admin} />
		<div class="relative md:ml-64 bg-blueGray-100">
			<AdminNavbar />
			{#if $page.url.pathname !== '/admin/department'}
				<HeaderStats {cards} />
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
{:else}
	<div class="container mx-auto px-4 h-full" in:fly={{ y: 200, duration: 800, delay: 10 }}>
		<div class="flex content-center items-center justify-center h-full">
			<div class="w-full lg:w-4/12 px-4">
				<div
					class="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-200 border-0"
				>
					<div class="rounded-t mb-0 px-6 py-6">
						<div class="btn-wrapper text-center">No Authentication</div>
						<hr class="mt-6 border-b-1 border-blueGray-300" />
					</div>
					<div class="flex-auto px-4 lg:px-10 py-10 pt-0">
						<div class="text-blueGray-400 text-center mb-3 font-bold">
							<a href="/"><small>Go back to login page</small></a>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
{/if}
