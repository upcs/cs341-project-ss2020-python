<template>
  <div id="info">
    <div class="layout column align-center justify-center">
      <h1 class="mb-2 display-3 text-center font-weight-bold">World Energy Explained</h1>
      <p>Access to energy is a key pillar for human wellbeing, economic development and poverty alleviation. Ensuring everyone has sufficient access is an ongoing and pressing challenge for global development.</p>
      <p>However, our energy systems also have important environmental impacts. Historical and current energy systems are dominated by fossil fuels (coal, oil and gas) which produce carbon dioxide (CO2) and other greenhouse gases– the fundamental driver of global climate change. If we are to meet our global climate targets and avoid dangerous climate change, the world needs a significant and concerted transition in its energy sources.</p>
      <p>Balancing the challenge between development and environment therefore provides us with an ultimate goal of ensuring everyone has access to enough sustainable energy to maintain a high standard of living.</p>
      <p>In this entry we attempt to cover the fundamental pillars we need to understand global and regional energy systems: their evolution through time in terms of consumption, relative sources, and trade; progress in global energy access and our transition towards low-carbon sources; and crucially the main development, economic and health drivers behind the energy choices we make. It is intended to provide a fundamental background to the macro-trends in our historical and current energy systems, with key learnings on how we can use this understanding to shape pathways towards a sustainable future.</p>
    </div>
    <InfoCard
      id = "infoCard1"
      class="mx-auto"
      title="Per Capita Energy Consumption"
      mainText="Here we see trends in per capita energy use from 1960-2014; this is inclusive of all dimensions of energy (electricity plus transport and heating), not exclusively electricity (with energy normalised kilowatt-hour equivalents per year). There are several important points to note. Firstly, global average per capita energy consumption has been consistently increasing; between 1970-2014, average consumption has increased by approximately 45 percent."
      imgSrc="https://ourworldindata.org/exports/energy-use-per-capita_v6_850x600.svg"
    ></InfoCard>
    <br>
    <InfoCard
      id = "infoCard2"
      class="mx-auto"
      title="How Much Energy Does the World Consume?"
      mainText="Let’s first take a look at how global energy production- both in terms of quantity and source- have changed over the long-term. In the visualisation we have plotted global energy consumption from 1800 through to 2018. Note that you can use the absolute/relative toggle on the chart to view these in absolute numbers or as the percentage of the global total."
      imgSrc="https://ourworldindata.org/exports/global-primary-energy_v9_850x600.svg"
    ></InfoCard>
    <br>
    <InfoCard
      id = "infoCard3"
      class="mx-auto"
      title="Global Energy Consumption by Source"
      mainText="Primary energy consumption is often called the ‘direct method’ as it shows energy statistics exactly in their raw form: how much coal, oil and gas energy are consumed as inputs to the energy system.
                                But, this approach does not account for the inefficiencies that fossil fuels incur when converted into final energy. We therefore show values corrected by what is termed the ‘substitution method’ – this gives a better approximation of final energy demand, and is often viewed as a more appropriate way to compare the shares of different energy sources."
      imgSrc="https://ourworldindata.org/exports/energy-consumption-by-source-and-region_v15_850x600.svg"
    ></InfoCard>
    <br>
    <div class="mx-auto div-container">
      <v-img id="pieChart" height="400px" width="600px" src="@/assets/images/chart.png"></v-img>
      <h1 class="section-title">The United States uses a mix of energy sources</h1>
      <div>The United States uses and produces many different types and sources of energy, which can be grouped into general categories such as primary and secondary, renewable and nonrenewable, and fossil fuels.</div>
      <br />
      <div>Primary energy sources include fossil fuels (petroleum, natural gas, and coal), nuclear energy, and renewable sources of energy. Electricity is a secondary energy source that is generated (produced) from primary energy sources.</div>
      <br />
      <div>Energy sources are measured in different physical units: liquid fuels in barrels or gallons, natural gas in cubic feet, coal in short tons, and electricity in kilowatts and kilowatthours. In the United States, British thermal units (Btu), a measure of heat energy, is commonly used for comparing different types of energy to each other. In 2018, total U.S. primary energy consumption was equal to about 101,251,057,000,000,000 British thermal units (Btu), or about 101.3 quadrillion Btu.</div>
    </div>
  </div>
</template>

<script>
import $ from 'jquery'
import InfoCard from "@/views/InfoCard.vue";
window.$ = $;
//External Citation to the above code.
//https://github.com/vuetifyjs/parallax-starter
export default {
  name: "Info",
  components: {
    InfoCard
  }
};
</script>

<style scoped>
.div-container {
  width: 600px;
  padding: 10px;
  border-radius: 10px;
  border: 1px solid black;
  background: white;
}

.section-title {
  width: 102%;
  border-bottom: 2px solid black;
}
</style>