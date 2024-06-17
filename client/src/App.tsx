import { Grid, Typography, Stack, Box } from "@mui/material";
import {
  TemperatureChart,
  HumidityChart,
  WaterLevelChart,
  Info,
  PlantsTable,
} from "./components";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

function App() {
  return (
    <>
      <Grid container spacing={2} sx={{ p: 1 }}>
        <Grid item xs={2}>
          <Info />
        </Grid>
        <Grid item xs={10}>
          <PlantsTable />
        </Grid>
        <Grid item xs={12} md={4}>
          <Typography align="center" mb="2">
            Water Level
          </Typography>
          <WaterLevelChart />
        </Grid>
        <Grid item xs={12} md={4}>
          <Typography align="center" mb="2">
            Temperature
          </Typography>
          <TemperatureChart />
        </Grid>

        <Grid item xs={12} md={4}>
          <Typography align="center" mb="2">
            Humidity
          </Typography>
          <HumidityChart />
        </Grid>
      </Grid>
    </>
  );
}

export default App;
