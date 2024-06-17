import { FC } from "react";
import { Line, ChartProps } from "react-chartjs-2";
import { useGetTemperaturesLastHourQuery } from "../store/api";

export const TemperatureChart: FC<object> = () => {
  const { data: temperatures, isSuccess } = useGetTemperaturesLastHourQuery(
    undefined,
    {
      pollingInterval: 1000,
    }
  );
  const data: ChartProps<"line">["data"] = {
    labels: isSuccess
      ? temperatures.map((t) => new Date(t.createdAt).toLocaleTimeString())
      : [],
    datasets: [
      {
        label: "Temperature",
        data: isSuccess ? temperatures.map((t) => t.value) : [],
        borderColor: "#42a5f5",
        fill: false,
        tension: 0.1,
      },
    ],
  };
  const options: ChartProps<"line">["options"] = {
    responsive: true,
    scales: {
      y: {
        title: {
          display: true,
          text: "Temperature (°C)",
        },
      },
      x: {
        title: {
          display: true,
          text: "Time",
        },
      },
    },
  };
  return <Line data={data} options={options} />;
};
