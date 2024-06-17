import React, { FC } from "react";
import { Line, ChartProps } from "react-chartjs-2";
import { useGetHumiditiesLastHourQuery } from "../store/api";

export const HumidityChart: FC<object> = () => {
  const { data: humidities, isSuccess } = useGetHumiditiesLastHourQuery(
    undefined,
    {
      pollingInterval: 1000,
    }
  );

  const data: ChartProps<"line">["data"] = {
    labels: isSuccess
      ? humidities.map((h) => new Date(h.createdAt).toLocaleTimeString())
      : [],
    datasets: [
      {
        label: "Humidity",
        data: isSuccess ? humidities.map((h) => h.value) : [],
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
          text: "Humidity (%)",
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
