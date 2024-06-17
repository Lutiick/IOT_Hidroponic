import { FC, useState, useEffect } from "react";
import { Typography, Button } from "@mui/material";
import { useGetSelectedPlantQuery } from "../store/api";

export const Info: FC<object> = () => {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [waterMotorStatus, setWaterMotorStatus] = useState(false);
  const [nutrientMotorStatus, setNutrientMotorStatus] = useState(false);
  const { data: selectedPlant } = useGetSelectedPlantQuery();

  const formatTime = (date: Date): string => {
    const hours = date.getHours().toString().padStart(2, "0");
    const minutes = date.getMinutes().toString().padStart(2, "0");
    return `${hours}:${minutes}`;
  };
  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentTime(new Date());
    }, 60000);
    return () => clearInterval(intervalId);
  }, []);
  return (
    <>
      <Typography mb="2">Current Time: {formatTime(currentTime)}</Typography>
      <Typography mb="2">Next nutrient releasing time: 12:08 PM</Typography>
      {/* <Button
        variant="contained"
        color="primary"
        sx={{ display: "block", my: 1 }}
        onClick={() => setWaterMotorStatus((prev) => !prev)}
      >
        {waterMotorStatus ? "Stop Water Motor" : "Start Water Motor"}
      </Button>
      <Button
        variant="contained"
        color="primary"
        sx={{ display: "block", my: 1 }}
        onClick={() => setNutrientMotorStatus((prev) => !prev)}
      >
        {nutrientMotorStatus ? "Stop Nutrient Motor" : "Start Nutrient Motor"}
      </Button> */}
    </>
  );
};
