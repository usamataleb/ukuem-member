<script>
	// core components
	import CardPageVisits from '$lib/components/Cards/CardPageVisits.svelte';
	import CardSocialTraffic from '$lib/components/Cards/CardSocialTraffic.svelte';
	// export let location;
	import { fly } from 'svelte/transition';

	const Headings = ['Member Details', 'Contribution Details', 'Payment Details'];

	const MemberDetails = [
		'Member Number: ',
		'First Contribution Period: ',
		'Last Paid Date',
		'Member Name: ',
		'Last Contribution Period: ',
		'Last Paid Amount: ',
		'Employer Number: ',
		'June 98 Credits: ',
		'Claimed Credits: ',
		'Employer Name: ',
		'June 98 Balance: ',
		'Paid Credits: ',
		'Date of Birth: ',
		'Total Credits: ',
		'Unclaimed Credits: ',
		'Date of Join: ',
		'Total Contributions: ',
		'Unclaimed Contributions: '
	];
</script>

<div >
	<div class="flex flex-wrap mt-4" in:fly={{ y: 200, duration: 800, delay: 10 }} >
		<div class="w-full xl:w-12/12 px-4">
			<CardSocialTraffic
				heading="Contribution Summary Report"
				tableHeading={Headings}
				columns={MemberDetails}
				seeAll={false}
				dashboard={false}
			/>
		</div>
	</div>
	<div class="flex flex-wrap mt-4 mb-5" in:fly={{ y: -200, duration: 800, delay: 10 }} >
		<div class="w-full xl:w-12/12 mb-12 xl:mb-0 px-4">
			<CardPageVisits seeAll={false} />
		</div>
	</div>
</div>
