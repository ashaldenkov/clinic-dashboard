import { CategoryScale, Chart, LinearScale, LineElement, PointElement, Tooltip } from 'chart.js';

// Register only what's used so the rest of Chart.js is tree-shaken.
Chart.register(CategoryScale, LinearScale, PointElement, LineElement, Tooltip);

Chart.defaults.font.size = 12;
Chart.defaults.font.family = 'Manrope';
Chart.defaults.color = 'black';
