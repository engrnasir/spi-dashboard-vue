<template>
    <Line
        :chartData="chartData"
        :chartOptions="chartOptions"
        :width="width"
        :height="height"
      />
  </template>
  <script>
  import { Line } from 'vue-chartjs'
  import { Chart as ChartJS, Title, Tooltip, Legend, LineElement, LinearScale, PointElement, CategoryScale, Plugin } from 'chart.js'
  
  ChartJS.register(Title, Tooltip, Legend,LineElement, PointElement, CategoryScale, LinearScale)
  
  export default {
    name: 'LineChart',
    components: { Line },
    props: {
      chartId: {
        type: String,
        default: 'line-chart'
      },
      datasetIdKey: {
        type: String,
        default: 'label'
      },
      width: {
        type: Number,
        default: 400
      },
      height: {
        type: Number,
        default: 600
      },
      cssClasses: {
        default: '',
        type: String
      },
      styles: {
        type: Object,
        default: () => {}
      },
      plugins: {
        type: Object,
        default: () => {}
      }
    },
    data() {
      return {
        chartData: {
            labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
            datasets: [
                {
                data: [40, 39, 10, 40, 39, 80, 40],
                label: '',
                backgroundColor: '#85C250',
                borderColor: ["#85C250"],
                tension:0.3,
                fill:true,
                }
            ],

        },
        chartOptions: {
            responsive: true,
            maintainAspectRatio: false,
            plugins:{
                legend:{
                    display:false,
                }
            }
        }
      }
    }
  }
  </script>
  <style lang="scss" scoped>

  </style>