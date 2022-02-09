import { defaults } from "react-chartjs-2";

import { ThemeColors, fonts, mode } from "types";

defaults.maintainAspectRatio = false;

// legend
defaults.plugins.legend.display = false;
defaults.plugins.legend.position = "bottom";
defaults.plugins.legend.labels.padding = 16;
defaults.plugins.legend.labels.usePointStyle = true;

// change text color
defaults.color = mode === "dark" ? ThemeColors.gray[700] : ThemeColors.gray[600];

// change font
defaults.font = {
  family: fonts.base,
  size: 13,
};

// change layout padding
defaults.layout.padding = 0;

// change grid colors to following
defaults.scale.grid.color = ThemeColors.gray[200];

// point
defaults.elements.point.radius = 0;
defaults.elements.point.backgroundColor = ThemeColors.theme["primary"];

// line
defaults.elements.line.tension = 0.4;
defaults.elements.line.borderWidth = 4;
defaults.elements.line.borderColor = ThemeColors.theme["primary"];
defaults.elements.line.backgroundColor = ThemeColors.transparent;
defaults.elements.line.borderCapStyle = "round";

// bar (v2. rectangle)
defaults.elements.bar.backgroundColor = ThemeColors.theme["warning"];
defaults.elements.bar.borderRadius = 10;

// arc (pie and doughnut)
defaults.elements.arc.backgroundColor = ThemeColors.theme["primary"];
defaults.elements.arc.borderColor = mode === "dark" ? ThemeColors.gray[800] : ThemeColors.white;
// defaults.elements.arc.borderWidth = 4;
defaults.elements.arc.hoverOffset = 6;

// tooltip
defaults.plugins.tooltip.mode = "nearest";
defaults.plugins.tooltip.intersect = true;

// scale grid
defaults.scale.grid.drawBorder = false;
defaults.scale.grid.drawTicks = false;

// scale linear(Y Axis)
defaults.scales["linear"].ticks.padding = 10;
defaults.scales["linear"].beginAtZero = true;
// this removes all tick labels that are not at a 10th of a unit
defaults.scales["linear"].ticks.callback = value => {
  const numberValue = parseInt(value.toString());
  if (!(numberValue % 10)) {
    return numberValue;
  } else {
    return null;
  }
};
defaults.scales["linear"] = {
  ...defaults.scales["linear"],
  grid: {
    ...defaults.scales["linear"].grid,
    borderDash: [2],
    borderDashOffset: 2,
  },
};

// scale category(X Axis)
defaults.scales["category"].ticks.padding = 20;
// takes away horizontal lines
defaults.scales["category"] = {
  ...defaults.scales["category"],
  grid: {
    ...defaults.scales["category"].grid,
    drawOnChartArea: false,
  },
};
