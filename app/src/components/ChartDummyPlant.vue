<script>
import { Bar } from "vue-chartjs";

export default {
  name: "ChartDummyPlant",
  extends: Bar,
  data: () => ({
    chartdata: {
      labels: ["Nuclear", "Coal", "Wind", "Hydro", "Natural Gas", "Solar"],
      datasets: [
        {
          label: "Portland-E",
          backgroundColor: "#29a329",
          stack: "Stack 0",
          yAxisID: "Emission",
          data: [43, 65, 23, 10, 20, 5],
        },
        {
          label: "Seattle-E",
          backgroundColor: "#f87979",
          stack: "Stack 0",
          yAxisID: "Emission",
          data: [38, 92, 32, 99, 23, 2]
        },
        {
          label: "Portland-P",
          backgroundColor: "#29a329",
          stack: "Stack 1",
          yAxisID: "AnnualPower",
          data: [100, 102, 503, 343, 228, 354],
        },
        {
          label: "Seattle-P",
          backgroundColor: "#f87979",
          stack: "Stack 1",
          yAxisID: "AnnualPower",
          data: [506, 375, 372, 237, 182, 201]
        }
      ]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      scales: {
        // y1: {
        //   type: 'linear',
        //   display: true,
        //   position: 'left',
        //   stacked: true
        // },
        // y2: {
        //   type: 'linear',
        //   display: true,
        //   position: 'right',
        //   stacked: true
        // },
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