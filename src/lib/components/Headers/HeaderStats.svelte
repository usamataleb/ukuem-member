<script lang="ts">
	// core components
	import { page } from '$app/stores';
	import CardStats from '$lib/components/Cards/CardStats.svelte';
	import type { InterfaceTypes } from '$lib/services/interfaces';

	export let cards: Array<InterfaceTypes['Card']>;
</script>

<!-- Header -->
<div class="relative bg-slate-500 md:pt-32 pb-32 pt-12">
	<div class="px-4 md:px-10 mx-auto w-full">
		<div>
			<!-- Card stats -->
			<div class="flex flex-wrap">
				{#each cards as cardDt, index}
					{#if $page.url.pathname !== '/admin'}
						{#if cardDt.statSubtitle !== 'All Members'}
							<div class="w-full lg:w-6/12 xl:w-4/12 px-4">
								<CardStats
									statSubtitle={cardDt.statSubtitle}
									statTitle={cardDt.statTitle.toString()}
									statArrow={cardDt.statArrow}
									statPercent={cardDt.statPercent.toString()}
									statPercentColor={cardDt.statPercentColor}
									statDescripiron={cardDt.statDescription}
									statIconName={cardDt.statIconName}
									statIconColor={cardDt.statIconColor}
								/>
							</div>
						{/if}
					{:else}
						<div class="w-full lg:w-6/12 xl:w-3/12 px-4">
							<CardStats
								statSubtitle={cardDt.statSubtitle}
								statTitle={cardDt.statTitle.toString()}
								statArrow={cardDt.statArrow}
								statPercent={cardDt.statPercent.toString()}
								statPercentColor={cardDt.statPercentColor}
								statDescripiron={cardDt.statDescription}
								statIconName={cardDt.statIconName}
								statIconColor={cardDt.statIconColor}
							/>
						</div>
					{/if}
				{/each}
			</div>
		</div>
	</div>
</div>
