// material-ui
import { useTheme } from '@mui/material/styles';
import Stack from '@mui/material/Stack';
import {
  Unstable_RadarDataProvider as RadarDataProvider,
  RadarGrid,
  RadarSeriesMarks,
  RadarSeriesArea,
  RadarMetricLabels,
  RadarAxisHighlight,
} from '@mui/x-charts/RadarChart';
import { ChartsSurface } from '@mui/x-charts/ChartsSurface';
import { ChartsLegend } from '@mui/x-charts/ChartsLegend';
import { BarChart } from '@mui/x-charts/BarChart';

const data = [80, 95, 70, 42, 65, 55, 78];
const xLabels = ['Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su'];

// ==============================|| MONTHLY BAR CHART ||============================== //
const series = [
  {
    id: 'australia-id',
    label: '',
    data: [5.52, 5.5, 3.19, 0.51, 0.15, 0.11],
    fillArea: true,
  },
];

const radar = {
  metrics: [
    'gobernante',
    'creador',
    'inocente',
    'sabio',
    'explorador',
    'rebelde',
    'mago',
  ]
};

const margin = { left: 50, right: 50 };

export default function MonthlyBarChart() {
  const theme = useTheme();

  return (
    <RadarDataProvider
      height={250}
      series={series}
      radar={radar}
      margin={margin}
    >
      <Stack
        direction="column"
        alignItems="center"
        gap={1}
        sx={{ width: '100%' }}
      >
        <ChartsSurface>
          <RadarGrid divisions={5} />
          <RadarMetricLabels />
          <RadarSeriesArea
            fillOpacity={0.4}
            strokeWidth={1}
            seriesId="australia-id"
          />
          <RadarSeriesArea
            fill="transparent"
            strokeWidth={1}
            seriesId="usa-id"
            strokeDasharray="4, 4"
            strokeLinecap="round"
          />
          <RadarAxisHighlight />
          <RadarSeriesMarks />
        </ChartsSurface>
      </Stack>
    </RadarDataProvider>
/*     <BarChart
      hideLegend
      height={380}
      series={[{ data, label: 'Series-1' }]}
      xAxis={[{ data: xLabels, scaleType: 'band', tickSize: 7, disableLine: true, categoryGapRatio: 0.4 }]}
      yAxis={[{ position: 'none' }]}
      slotProps={{ bar: { rx: 5, ry: 5 } }}
      axisHighlight={{ x: 'none' }}
      margin={{ left: 20, right: 20 }}
      colors={[theme.vars.palette.info.light]}
      sx={{
        '& .MuiBarElement-root:hover': { opacity: 0.6 },
        '& .MuiChartsAxis-root.MuiChartsAxis-directionX .MuiChartsAxis-tick': { stroke: 'transparent' }
      }}
    /> */
  );
}
