const mapData = {
  AU: 760,
  BR: 550,
  CA: 120,
  DE: 1300,
  FR: 540,
  GB: 690,
  GE: 200,
  IN: 200,
  RO: 600,
  RU: 300,
  US: 2920,
};

const markers = [
  {
    latLng: [41.9, 12.45],
    name: "Vatican City",
  },
  {
    latLng: [43.73, 7.41],
    name: "Monaco",
  },
  {
    latLng: [35.88, 14.5],
    name: "Malta",
  },
  {
    latLng: [1.3, 103.8],
    name: "Singapore",
  },
  {
    latLng: [1.46, 173.03],
    name: "Kiribati",
  },
  {
    latLng: [-21.13, -175.2],
    name: "Tonga",
  },
  {
    latLng: [15.3, -61.38],
    name: "Dominica",
  },
  {
    latLng: [-20.2, 57.5],
    name: "Mauritius",
  },
  {
    latLng: [26.02, 50.55],
    name: "Bahrain",
  },
];

module.exports = [mapData, markers];
