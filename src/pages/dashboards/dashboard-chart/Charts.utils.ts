import { Chart, ThemeColors, IBarChart, ILineChart, IPieChart, IDoughnutChart } from "types";

export const emptyLineChartUI: ILineChart = {
  data: { labels: [], datasets: [] },
  options: {},
};

export const emptyIBarChartUI: IBarChart = {
  data: { labels: [], datasets: [] },
  options: {},
};

export const emptyIPieChartUI: IPieChart = {
  data: { labels: [], datasets: [] },
  options: {},
};

export const emptyIDoughnutChartUI: IDoughnutChart = {
  data: { labels: [], datasets: [] },
  options: {},
};

export const toLineChartUI = (header: string, apiOrderedValues: Chart[]): ILineChart => {
  return {
    data: {
      labels: [
        apiOrderedValues[0].label,
        apiOrderedValues[1].label,
        apiOrderedValues[2].label,
        apiOrderedValues[3].label,
        apiOrderedValues[4].label,
        apiOrderedValues[5].label,
      ],
      datasets: [
        {
          label: header,
          data: [
            apiOrderedValues[0].value,
            apiOrderedValues[1].value,
            apiOrderedValues[2].value,
            apiOrderedValues[3].value,
            apiOrderedValues[4].value,
            apiOrderedValues[5].value,
          ],
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
};

export const toPieChart = (header: string, apiOrderedValues: Chart[]): IPieChart => {
  return {
    data: {
      labels: [
        apiOrderedValues[0].label,
        apiOrderedValues[1].label,
        apiOrderedValues[2].label,
        apiOrderedValues[3].label,
        apiOrderedValues[4].label,
        apiOrderedValues[5].label,
      ],
      datasets: [
        {
          label: header,
          data: [
            apiOrderedValues[0].value,
            apiOrderedValues[1].value,
            apiOrderedValues[2].value,
            apiOrderedValues[3].value,
            apiOrderedValues[4].value,
            apiOrderedValues[5].value,
          ],
          backgroundColor: [
            ThemeColors.theme["primary"],
            ThemeColors.theme["info"],
            ThemeColors.theme["success"],
            ThemeColors.theme["danger"],
            ThemeColors.theme["neutral4"],
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
};

export const toDoughnutChart = (header: string, apiOrderedValues: Chart[]): IDoughnutChart => {
  return {
    data: {
      labels: [apiOrderedValues[0].label, apiOrderedValues[1].label],
      datasets: [
        {
          label: header,
          data: [apiOrderedValues[0].value, apiOrderedValues[1].value],
          backgroundColor: [ThemeColors.theme["primary"], ThemeColors.theme["danger"]],
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
};
