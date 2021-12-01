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

// Only for demo purposes - return a random number to generate datasets
const randomScalingFactor = () => Math.round(Math.random() * 100);

export const barTurnoverData = {
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

export const lineActiveMembersData = {
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

// @todo improve hover
export const pieByRole = {
  data: {
    labels: [
      "Advocates",
      "Trainer",
      "Sponsor",
      "Country Leader",
      "Region Leader",
      "Global Leader",
    ],
    datasets: [
      {
        label: "Dataset 1",
        data: [
          randomScalingFactor(),
          randomScalingFactor(),
          randomScalingFactor(),
          randomScalingFactor(),
          40,
          14,
          6,
        ],
        backgroundColor: [
          colors.theme["danger"],
          colors.theme["warning"],
          colors.theme["success"],
          colors.theme["primary"],
          colors.theme["info"],
          colors.gray[600],
          colors.gray[400],
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

// @todo improve hover
export const pieByBusinessUnits = {
  data: {
    labels: [
      "Road Logistics",
      "Sales",
      "Human Resources",
      "QSHE",
      "IT",
      "Sea Logistics",
      "Marketing",
      "Air Logistics",
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
        ],
        backgroundColor: [
          colors.theme["danger"],
          colors.gray[400],
          colors.theme["warning"],
          colors.theme["success"],
          colors.theme["primary"],
          colors.theme["info"],
          colors.gray[600],
          colors.theme["purple"],
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
    // hover: {
    //   mode: "index",
    // },
    animation: {
      animateScale: true,
    },
  },
};

export const doughnutByGender = {
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

// @todo improve hover
export const pieByAge = {
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
          colors.theme["danger"],
          colors.gray[400],
          colors.theme["warning"],
          colors.theme["success"],
          colors.theme["primary"],
          colors.theme["info"],
          colors.gray[600],
          colors.theme["purple"],
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
    // hover: {
    //   mode: "index",
    // },
    animation: {
      animateScale: true,
    },
  },
};

// @todo improve hover
export const pieByWorkingTime = {
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
          colors.theme["danger"],
          colors.theme["warning"],
          colors.theme["success"],
          colors.theme["primary"],
          colors.theme["info"],
          colors.theme["purple"],
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
    // hover: {
    //   mode: "index",
    // },
    animation: {
      animateScale: true,
    },
  },
};

// Example 1 of Chart inside src/views/dashboards/Dashboard.js
export const chartExample1 = {
  options: {
    scales: {
      yAxes: [
        {
          gridLines: {
            color: colors.gray[700],
            zeroLineColor: colors.gray[700],
          },
          ticks: {
            callback: function (value) {
              if (!(value % 10)) {
                return "$" + value + "k";
              }
            },
          },
        },
      ],
    },
    tooltips: {
      callbacks: {
        label: function (item, data) {
          var label = data.datasets[item.datasetIndex].label || "";
          var yLabel = item.yLabel;
          var content = "";

          if (data.datasets.length > 1) {
            content += label;
          }

          content += "$" + yLabel + "k";
          return content;
        },
      },
    },
  },
  data1: canvas => {
    return {
      labels: ["May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
      datasets: [
        {
          label: "Performance",
          data: [0, 20, 10, 30, 15, 40, 20, 60, 60],
        },
      ],
    };
  },
  data2: canvas => {
    return {
      labels: ["May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
      datasets: [
        {
          label: "Performance",
          data: [0, 20, 5, 25, 10, 30, 15, 40, 40],
        },
      ],
    };
  },
};

// Example 2 of Chart inside src/views/dashboards/Dashboard.js and src/views/dashboards/Alternative.js and src/views/pages/Charts.js
export const chartExample2 = {
  options: {
    scales: {
      yAxes: [
        {
          gridLines: {
            color: colors.gray[200],
            zeroLineColor: colors.gray[200],
          },
          ticks: {
            callback: function (value) {
              if (!(value % 10)) {
                //return '$' + value + 'k'
                return value;
              }
            },
          },
        },
      ],
    },
    tooltips: {
      callbacks: {
        label: function (item, data) {
          var label = data.datasets[item.datasetIndex].label || "";
          var yLabel = item.yLabel;
          var content = "";
          if (data.datasets.length > 1) {
            content += label;
          }
          content += yLabel;
          return content;
        },
      },
    },
  },
  data: {
    labels: ["Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
    datasets: [
      {
        label: "Sales",
        data: [25, 20, 30, 22, 17, 29],
        maxBarThickness: 10,
      },
    ],
  },
};

// Example 3 of Chart inside src/views/dashboards/Alternative.js and src/views/pages/Charts.js
export const chartExample3 = {
  options: {
    scales: {
      yAxes: [
        {
          gridLines: {
            color: colors.gray[200],
            zeroLineColor: colors.gray[200],
          },
          ticks: {},
        },
      ],
    },
  },
  data: {
    labels: ["May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
    datasets: [
      {
        label: "Performance",
        data: [0, 20, 10, 30, 15, 40, 20, 60, 60],
      },
    ],
  },
};

// Example 4 of Chart inside src/views/pages/Charts.js
export const chartExample4 = {
  options: {
    scales: {
      yAxes: [
        {
          gridLines: {
            color: colors.gray[200],
            zeroLineColor: colors.gray[200],
          },
          ticks: {},
        },
      ],
    },
  },
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
};

// Example 5 of Chart inside src/views/pages/Charts.js
export const chartExample5 = {
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
    responsive: true,
    legend: {
      position: "top",
    },
    animation: {
      animateScale: true,
      animateRotate: true,
    },
  },
};

// Example 6 of Chart inside src/views/pages/Charts.js
export const chartExample6 = {
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
    responsive: true,
    legend: {
      position: "top",
    },
    animation: {
      animateScale: true,
      animateRotate: true,
    },
  },
};

// Example 7 of Chart inside src/views/pages/Charts.js
export const chartExample7 = {
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
    tooltips: {
      mode: "index",
      intersect: false,
    },
    responsive: true,
    scales: {
      xAxes: [
        {
          stacked: true,
        },
      ],
      yAxes: [
        {
          stacked: true,
        },
      ],
    },
  },
};
