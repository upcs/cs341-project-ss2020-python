<script>
import { Bar } from "vue-chartjs";

export default {
  name: "ChartDummy",
  extends: Bar,
  data: () => ({
    chartdata: {
      labels: ["Nuclear", "Coal", "Wind", "Hydro", "Natural Gas", "Solar"],
      datasets: [
        {
          
          label: "Portland",
          backgroundColor: "",
          data: [43, 65, 23, 10, 20, 5],
        },
        {
          label: "Seattle",
          backgroundColor: "#f87979",
          data: [38, 92, 32, 99, 23, 2]
        }
      ]
    },
    options: {
      title: "Energy Produced in a Year by Source",
      responsive: true,
      maintainAspectRatio: false,
    }
  }),

  mounted() {
    this.renderChart(this.chartdata, this.options);
  }
};
</script>