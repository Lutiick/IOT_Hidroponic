import mqtt from "mqtt";
import dotenv from "dotenv";
import axios from "axios";
dotenv.config();
let lastTimeMessageReceived = Date.now();

const mqttClient = mqtt.connect(`mqtt://mosquitto:1883`, {
  clientId: process.env.CLIENT_ID
});

mqttClient.on("connect", function () {
  console.log("Connected to MQTT broker");
  mqttClient.subscribe("esp32/pub");
});

mqttClient.on("message", function (topic, message) {
  const currentTime = Date.now();
  const timeDiff = (currentTime - lastTimeMessageReceived) / 1000;
  if (timeDiff > process.env.TRANSFER_INTERVAL_SECONDS) {
    const data = JSON.parse(message.toString());
    if (
      data.temperature === undefined ||
      data.humidity === undefined ||
      data.waterLevel === undefined
    )
      return;
    axios.post(`http://server1:5000/temperatures`, {
      value: parseInt(data.temperature),
    });
    axios.post(`http://server1:5000/humidities`, {
      value: parseInt(data.humidity),
    });
    axios.post(`http://server1:5000/water-levels`, {
      value: parseInt(data.waterLevel),
    });
    console.log("Data sent to API", {
      temperature: data.temperature,
      humidity: data.humidity,
      waterLevel: data.waterLevel,
    });
    lastTimeMessageReceived = currentTime;
  }
});

mqttClient.on("error", function (error) {
  console.error("Error:", error);
});
