<script>
import { Bar } from "vue-chartjs";

export default {
  name: "ChartDummyCity",
  extends: Bar,
  data: () => ({
    chartdata: {
      labels: ["Portland", "Seattle"],
      datasets: [
        {
          label: "Nuclear-E",
          backgroundColor: "#29a329",
          stack: "Stack 0",
          yAxisID: "Emission",
          data: [43, 65],
        },
        {
          label: "Coal",
          backgroundColor: "#133123",
          stack: "Stack 0",
          yAxisID: "Emission",
          data: [38, 92]
        },
        {
          label: "Hydro-E",
          backgroundColor: "#00b3ff",
          stack: "Stack 0",
          yAxisID: "Emission",
          data: [38, 92]
        },
        {
          label: "Wind-E",
          backgroundColor: "#20b2aa",
          stack: "Stack 0",
          yAxisID: "Emission",
          data: [38, 92]
        },
        {
          label: "Nuclear-P",
          backgroundColor: "#29a329",
          stack: "Stack 1",
          yAxisID: "AnnualPower",
          data: [100, 102],
        },
        {
          label: "Coal",
          backgroundColor: "#133123",
          stack: "Stack 1",
          yAxisID: "AnnualPower",
          data: [43, 65],
        },
        {
          label: "Hydro-P",
          backgroundColor: "#00b3ff",
          stack: "Stack 1",
          yAxisID: "AnnualPower",
          data: [38, 92]
        },
        {
          label: "Wind-P",
          backgroundColor: "#20b2aa",
          stack: "Stack 1",
          yAxisID: "AnnualPower",
          data: [38, 92]
        },
      ]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      scales: {
        xAxes: [
          {
            stacked: true
          }
        ],
        yAxes: [
          {
            id: "Emission",
            position: "left",
            stacked: true
          },
          {
            id: "AnnualPower",
            position: "right",
            stacked: true,
            gridLines: {
							drawOnChartArea: false
						}
         }
        ]
      }
    }
  }),

  mounted() {
    this.renderChart(this.chartdata, this.options);
  }
};
</script>