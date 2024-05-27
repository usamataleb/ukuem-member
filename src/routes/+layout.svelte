<script>
	// import '$lib/css/app.css';
	import '$lib/css/tailwind.css';
	import '@fortawesome/fontawesome-free/css/all.min.css';

	import registerBg2 from '$lib/images/register_bg_2.png';
</script>

<div class="app">
		<main>
			<div>
				<main>
					<section class="relative w-full h-full py-40 min-h-screen">
						<div
							class="absolute top-0 w-full h-full bg-blueGray-800 bg-no-repeat bg-full"
							style="background-image: url({registerBg2});"
						>
							<slot />
						</div>
					</section>
				</main>
			</div>
		</main>
</div>
