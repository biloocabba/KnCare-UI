/*!

=========================================================
* Argon Dashboard PRO React - v1.2.0
=========================================================

* Product Page: https://www.creative-tim.com/product/argon-dashboard-pro-react
* Copyright 2021 Creative Tim (https://www.creative-tim.com)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/

import { colors } from "variables";
import { IBarChart, IDoughnutChart, ILineChart, IPieChart } from "./types";

// Only for demo purposes - return a random number to generate datasets
const randomScalingFactor = () => Math.round(Math.random() * 100);

export const barTurnoverData:IBarChart = {
  data: {
    labels: [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
    ],
    datasets: [
      {
        label: "Offboarded",
        backgroundColor: colors.theme["danger"],
        data: [
          randomScalingFactor(),
          randomScalingFactor(),
          randomScalingFactor(),
          randomScalingFactor(),
          randomScalingFactor(),
          randomScalingFactor(),
          randomScalingFactor(),
        ],
        maxBarThickness: 10,
      },
      {
        label: "Onboarded",
        backgroundColor: colors.theme["success"],
        data: [
          randomScalingFactor(),
          randomScalingFactor(),
          randomScalingFactor(),
          randomScalingFactor(),
          randomScalingFactor(),
          randomScalingFactor(),
          randomScalingFactor(),
        ],
        maxBarThickness: 10,
      },
    ],
  },
  options: {
    plugins: {
      tooltip: {
        mode: "index",
        intersect: false,
      },
    },
    scales: {
      x: {
        stacked: true,
      },
      y: {
        stacked: true,
      },
    },
  },
};

export const lineActiveMembersData:ILineChart = {
  data: {
    labels: ["May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
    datasets: [
      {
        label: "Members",
        data: [102, 122, 108, 128, 148, 144, 174, 202, 198],
        pointRadius: 4,
      },
    ],
  },
  options: {
    plugins: {
      tooltip: {
        intersect: false,
      },
      decimation: {
        enabled: true,
      },
    },
  },
};

export const pieByRole:IPieChart = {
  data: {
    labels: [
      "Regional Transformation Manager",
      "Country Transformation Manager",
      "Advocate",
      "Trainer",
      "Sponsor",
    ],
    datasets: [
      {
        label: "Dataset 1",
        data: [
          randomScalingFactor(),
          randomScalingFactor(),
          randomScalingFactor(),
          randomScalingFactor(),
          randomScalingFactor(),
        ],
        backgroundColor: [
          colors.theme["primary"],
          colors.theme["info"],
          colors.theme["success"],
          colors.theme["danger"],
          colors.theme["neutral4"],
        ],
      },
    ],
  },
  options: {
    plugins: {
      legend: {
        position: "top",
      },
    },

    animation: {
      animateScale: true,
    },
  },
};

export const pieByBusinessUnits:IPieChart = {
  data: {
    labels: [
      "Road Logistics",
      "Air Logistics",
      "Sea Logistics",
      "Sales",
      "Contract Logistics",
      "Human Resources",
      "QSHE",
      "Marketing",
      "Finance",
      "Legal",
      "IT",
      "Administrative",
      "National Management",
    ],
    datasets: [
      {
        label: "Dataset 1",
        data: [
          randomScalingFactor(),
          randomScalingFactor(),
          randomScalingFactor(),
          randomScalingFactor(),
          randomScalingFactor(),
          randomScalingFactor(),
          randomScalingFactor(),
          randomScalingFactor(),
          randomScalingFactor(),
          randomScalingFactor(),
          randomScalingFactor(),
          randomScalingFactor(),
          randomScalingFactor(),
        ],
        backgroundColor: [
          colors.theme["primary"],
          colors.theme["info"],
          colors.theme["success"],
          colors.theme["danger"],
          colors.theme["neutral4"],
          colors.theme["neutral3"],
          colors.gray[500],
          colors.gray[600],
          colors.gray[300],
          colors.gray[400],
          colors.gray[700],
          colors.gray[800],
          colors.gray[900],
        ],
      },
    ],
  },
  options: {
    plugins: {
      legend: {
        position: "top",
      },
    },
    animation: {
      animateScale: true,
    },
  },
};

export const doughnutByGender:IDoughnutChart = {
  data: {
    labels: ["Men", "Women"],
    datasets: [
      {
        label: "Dataset 1",
        data: [randomScalingFactor(), randomScalingFactor()],
        backgroundColor: [colors.theme["primary"], colors.theme["danger"]],
      },
    ],
  },
  options: {
    plugins: {
      legend: {
        position: "top",
      },
    },
    // hover: {
    //   mode: "index",
    // },
    animation: {
      animateScale: true,
    },
  },
};

export const pieByAge:IPieChart = {
  data: {
    labels: ["20", "25", "30", "35", "40", "45", "50", "50+"],
    datasets: [
      {
        label: "Care Members",
        data: [
          randomScalingFactor(),
          randomScalingFactor(),
          randomScalingFactor(),
          randomScalingFactor(),
          randomScalingFactor(),
          randomScalingFactor(),
          randomScalingFactor(),
          randomScalingFactor(),
        ],
        backgroundColor: [
          colors.theme["primary"],
          colors.theme["info"],
          colors.theme["success"],
          colors.theme["danger"],
          colors.theme["neutral4"],
          colors.theme["neutral3"],
          colors.gray[500],
          colors.gray[600],
        ],
      },
    ],
  },
  options: {
    plugins: {
      legend: {
        position: "top",
      },
    },
    animation: {
      animateScale: true,
    },
  },
};

export const pieByWorkingTime:IPieChart = {
  data: {
    labels: ["1", "2", "3", "4", "5", "5+"],
    datasets: [
      {
        label: "Care Members",
        data: [
          randomScalingFactor(),
          randomScalingFactor(),
          randomScalingFactor(),
          randomScalingFactor(),
          randomScalingFactor(),
          randomScalingFactor(),
        ],
        backgroundColor: [
          colors.theme["primary"],
          colors.theme["info"],
          colors.theme["success"],
          colors.theme["danger"],
          colors.theme["neutral4"],
          colors.theme["neutral3"],
        ],
      },
    ],
  },
  options: {
    plugins: {
      legend: {
        position: "top",
      },
    },
    animation: {
      animateScale: true,
    },
  },
};

export const lineChartExample: ILineChart = {
  data: {
    labels: ["Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
    datasets: [
      {
        label: "Sales",
        data: [25, 20, 30, 22, 17, 29],
        pointRadius: 4,
      },
    ],
  },
  options: {
    plugins: {
      tooltip: {
        intersect: false,
      },
      decimation: {
        enabled: true,
      },
    },
  },
};

export const barChartExample: IBarChart = {
  data: {
    labels: ["May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
    datasets: [
      {
        label: "Performance",
        backgroundColor: colors.theme["danger"],
        data: [0, 20, 10, 30, 15, 40, 20, 60, 60],
        maxBarThickness: 10,
      },
    ],
  },
  options: {
    plugins: {
      tooltip: {
        mode: "index",
        intersect: false,
      },
    },
  },
};

export const dotChartExample: ILineChart = {
  data: {
    labels: ["May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
    datasets: [
      {
        label: "Performance",
        data: [10, 18, 28, 23, 28, 40, 36, 46, 52],
        pointRadius: 10,
        pointHoverRadius: 15,
        showLine: false,
      },
    ],
  },
  options: {},
};

export const doughnutChartExample: IDoughnutChart = {
  data: {
    labels: ["Danger", "Warning", "Success", "Primary", "Info"],
    datasets: [
      {
        data: [
          randomScalingFactor(),
          randomScalingFactor(),
          randomScalingFactor(),
          randomScalingFactor(),
          randomScalingFactor(),
        ],
        backgroundColor: [
          colors.theme["danger"],
          colors.theme["warning"],
          colors.theme["success"],
          colors.theme["primary"],
          colors.theme["info"],
        ],
        label: "Dataset 1",
      },
    ],
  },
  options: {
    plugins: {
      legend: {
        position: "top",
      },
    },
    animation: {
      animateScale: true,
    },
    cutout: 120,
  },
};

export const pieChartExample: IPieChart = {
  data: {
    labels: ["Danger", "Warning", "Success", "Primary", "Info"],
    datasets: [
      {
        label: "Dataset 1",
        data: [
          randomScalingFactor(),
          randomScalingFactor(),
          randomScalingFactor(),
          randomScalingFactor(),
          randomScalingFactor(),
        ],
        backgroundColor: [
          colors.theme["danger"],
          colors.theme["warning"],
          colors.theme["success"],
          colors.theme["primary"],
          colors.theme["info"],
        ],
      },
    ],
  },
  options: {
    plugins: {
      legend: {
        position: "top",
      },
    },
    animation: {
      animateScale: true,
    },
  },
};

export const multiBarChartExample: IBarChart = {
  data: {
    labels: [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
    ],
    datasets: [
      {
        label: "Dataset 1",
        backgroundColor: colors.theme["danger"],
        data: [
          randomScalingFactor(),
          randomScalingFactor(),
          randomScalingFactor(),
          randomScalingFactor(),
          randomScalingFactor(),
          randomScalingFactor(),
          randomScalingFactor(),
        ],
        maxBarThickness: 10,
      },
      {
        label: "Dataset 2",
        backgroundColor: colors.theme["primary"],
        data: [
          randomScalingFactor(),
          randomScalingFactor(),
          randomScalingFactor(),
          randomScalingFactor(),
          randomScalingFactor(),
          randomScalingFactor(),
          randomScalingFactor(),
        ],
        maxBarThickness: 10,
      },
      {
        label: "Dataset 3",
        backgroundColor: colors.theme["success"],
        data: [
          randomScalingFactor(),
          randomScalingFactor(),
          randomScalingFactor(),
          randomScalingFactor(),
          randomScalingFactor(),
          randomScalingFactor(),
          randomScalingFactor(),
        ],
        maxBarThickness: 10,
      },
    ],
  },
  options: {
    plugins: {
      tooltip: {
        mode: "index",
        intersect: false,
      },
    },
    scales: {
      x: {
        stacked: true,
      },
      y: {
        stacked: true,
      },
    },
  },
};
