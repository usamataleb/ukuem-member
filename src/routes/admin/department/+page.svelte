<script>
	import DepartmentProfile from '$lib/components/department/DepartmentProfile.svelte';
	import CardlList from '$lib/components/Cards/CardlList.svelte';
	import departPic from '$lib/images/department.jpeg';
	import { fly } from 'svelte/transition';

</script>

<section class="relative block h-500-px" in:fly={{ y: 200, duration: 800 }} >
	<div
		class="absolute top-0 w-full h-full bg-center bg-cover"
		style="
            background-image: url({departPic});
          "
	>
		<span id="blackOverlay" class="w-full h-full absolute opacity-50 bg-black"></span>
	</div>
	<div
		class="top-auto bottom-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden h-70-px"
		style="transform: translateZ(0);"
	>
		<svg
			class="absolute bottom-0 overflow-hidden"
			xmlns="http://www.w3.org/2000/svg"
			preserveAspectRatio="none"
			version="1.1"
			viewBox="0 0 2560 100"
			x="0"
			y="0"
		>
			<polygon class="text-blueGray-200 fill-current" points="2560 0 2560 100 0 100"></polygon>
		</svg>
	</div>
</section>
<section class="relative py-16 bg-blueGray-200" in:fly={{ y: -200, duration: 800, delay: 10 }} >
	<div class="flex flex-wrap">
		<div class="w-full lg:w-8/12 px-4">
			<DepartmentProfile />
		</div>

		<div class="w-full lg:w-4/12 px-4">
			<CardlList />
		</div>
	</div>
</section>
