<script>
  // core components
  import CardTable from "$lib/components/Cards/CardTable.svelte";
    import CardForm from "$lib/components/Cards/CardForm.svelte";
	import { fly } from 'svelte/transition';

</script>

<div class="flex flex-wrap mt-6 mb-6" in:fly={{ y: 200, duration: 800, delay: 10 }}>
  <div class="w-full mb-12 px-4">
    <CardForm color="light" />
  </div>
</div>
