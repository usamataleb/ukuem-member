<script>
  // core components
  import CardSettings from "$lib/components/Cards/CardSettings.svelte";
  import CardProfile from "$lib/components/Cards/CardProfile.svelte";
	import { fly } from 'svelte/transition';

  // export let location;
</script>

<div class="flex flex-wrap" in:fly={{ y: 200, duration: 800, delay: 10 }}>
  <div class="w-full px-4">
    <CardSettings />
  </div>
</div>
