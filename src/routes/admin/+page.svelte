<script lang="ts">
	// core components
	import CardLineChart from '$lib/components/Cards/CardLineChart.svelte';
	import CardProfile from '$lib/components/Cards/CardProfile.svelte';
	import CardPageVisits from '$lib/components/Cards/CardPageVisits.svelte';
	import CardSocialTraffic from '$lib/components/Cards/CardSocialTraffic.svelte';
	import { fly } from 'svelte/transition';
	import CardBarChart from '$lib/components/Cards/CardBarChart.svelte';
	import type { InterfaceTypes } from '$lib/services/interfaces';
	import { onMount } from 'svelte';
	import { user } from '$lib/services/User';

	// export let location;

	let amount: string[] = [];
	let year: string[] = [];

	onMount(async () => {
		amount = await user.getAllDonation();
		year = await user.getYear();
	});

	const Headings = ['Name', 'Department', 'Completion %'];
</script>

<div>
	<div class="flex flex-wrap" in:fly={{ y: 200, duration: 800, delay: 10 }}>
		<div class="w-full xl:w-8/12 mb-12 xl:mb-0 px-4 mt-16">
			<CardBarChart doner={amount} years={year} />
		</div>
		<div class="w-full xl:w-4/12 px-4">
			<CardProfile />
		</div>
	</div>
	<div class="flex flex-wrap mt-4" in:fly={{ y: -200, duration: 800, delay: 10 }}>
		<div class="w-full xl:w-8/12 mb-12 xl:mb-0 px-4">
			<CardPageVisits />
		</div>
		<div class="w-full xl:w-4/12 px-4">
			<CardSocialTraffic heading="Top Contributors" tableHeading={Headings} dashboard={true} />
		</div>
	</div>
</div>
