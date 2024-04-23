<script>
  import CardRegisration from "$lib/components/Cards/CardRegisration.svelte";
	import { fly } from 'svelte/transition';

</script>

<div class="flex flex-wrap mt-4" in:fly={{ y: 200, duration: 800 }}  >
  <div class="w-full mb-12 px-4">
    <CardRegisration />
  </div>
</div>
