// Підключення функціоналу "Чертоги Фрілансера"
import { isMobile } from "./functions.js";
// Підключення списку активних модулів
import { flsModules } from "./modules.js";
import Chart from "chart.js/auto";

const canvas = document.getElementById("profitChart");
if (canvas) {
  let profitData = JSON.parse(canvas.getAttribute("data-profit"));

  let maxProfit = Math.max(...profitData) + 20;

  const ctx = canvas.getContext("2d");

  const chart = new Chart(ctx, {
    type: "line",
    data: {
      labels: [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
      ],
      datasets: [
        {
          label: "",
          data: profitData,
          borderColor: "#334BEB",
          fill: true,
          backgroundColor: "rgba(51, 75, 235, 0.1)",
          tension: 0.1,
          borderWidth: 2,
        },
      ],
    },
    options: {
      elements: {
        point: {
          radius: 0,
        },
      },
      scales: {
        x: {
          grid: {
            display: false,
          },
        },
        y: {
          beginAtZero: false,
          min: 0,
          max: maxProfit,
          ticks: {
            stepSize: 20,
          },
          grid: {
            color: "#e4e7ec",
          },
        },
      },
      plugins: {
        legend: {
          display: false,
        },
      },
    },
  });
}
