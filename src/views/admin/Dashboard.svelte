<script>
  // core components
  import CardLineChart from "components/Cards/CardLineChart.svelte";
  import CardProfile from "components/Cards/CardProfile.svelte";
  import CardPageVisits from "components/Cards/CardPageVisits.svelte";
  import CardSocialTraffic from "components/Cards/CardSocialTraffic.svelte";
  // export let location;

  const Headings = ["Name", "Department", "Completion %"]

</script>

<div>
  <div class="flex flex-wrap">
    <div class="w-full xl:w-8/12 mb-12 xl:mb-0 px-4 mt-20">
      <CardLineChart />
    </div>
    <div class="w-full xl:w-4/12 px-4">
      <CardProfile />
    </div>
  </div>
  <div class="flex flex-wrap mt-4">
    <div class="w-full xl:w-8/12 mb-12 xl:mb-0 px-4">
      <CardPageVisits />
    </div>
    <div class="w-full xl:w-4/12 px-4">
      <CardSocialTraffic 
      heading = "Top Contributors"
      tableHeading = {Headings}
dashboard = {true}
      />
    </div>
  </div>
</div>
