import { FC } from "react";
import { Line, ChartProps } from "react-chartjs-2";
import { useGetWaterLevelsLastHourQuery } from "../store/api";

export const WaterLevelChart: FC<object> = () => {
  const { data: waterLevels, isSuccess } = useGetWaterLevelsLastHourQuery(
    undefined,
    {
      pollingInterval: 1000,
    }
  );
  const data: ChartProps<"line">["data"] = {
    labels: isSuccess
      ? waterLevels.map((w) => new Date(w.createdAt).toLocaleTimeString())
      : [],
    datasets: [
      {
        label: "Water Level",
        data: isSuccess ? waterLevels.map((w) => w.value) : [],
        fill: false,
        borderColor: "#42a5f5",
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
          text: "Water Level (%)",
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
