<script>
  // core components
  import CardStats from "$lib/components/Cards/CardStats.svelte";
</script>

<!-- Header -->
<div class="relative bg-slate-500 md:pt-32 pb-32 pt-12">
  <div class="px-4 md:px-10 mx-auto w-full">
    <div>
      <!-- Card stats -->
      <div class="flex flex-wrap">
        <div class="w-full lg:w-6/12 xl:w-3/12 px-4">
          <CardStats
            statSubtitle="Total Raised"
            statTitle="350,897"
            statArrow="up"
            statPercent="3.48"
            statPercentColor="text-emerald-500"
            statDescripiron="Since last month"
            statIconName="far fa-chart-bar"
            statIconColor="bg-red-500"
          />
        </div>
        <div class="w-full lg:w-6/12 xl:w-3/12 px-4">
          <CardStats
            statSubtitle="All Members"
            statTitle="924"
            statArrow="up"
            statPercent="1.10"
            statPercentColor="text-green-500"
            statDescripiron="Until now"
            statIconName="fas fa-users"
            statIconColor="bg-pink-500"
          />
        </div>
        <div class="w-full lg:w-6/12 xl:w-3/12 px-4">
          <CardStats
            statSubtitle="Monthly Contribution"
            statTitle="2,356"
            statArrow=""
            statPercent=""
            statPercentColor="text-red-500"
            statDescripiron=""
            statIconName="fas fa-dollar-sign"
            statIconColor="bg-orange-500"
          />
        </div>

        <div class="w-full lg:w-6/12 xl:w-3/12 px-4">
          <CardStats
            statSubtitle="Negative Balance"
            statTitle="49,65%"
            statArrow=""
            statPercent=""
            statPercentColor="text-emerald-500"
            statDescripiron=""
            statIconName="fas fa-truck-loading"
            statIconColor="bg-emerald-500"
          />
        </div>
      </div>
    </div>
  </div>
</div>
