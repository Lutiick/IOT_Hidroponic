import os
import time
import random
import json
import paho.mqtt.client as mqtt

# Получаем ID устройства из переменной окружения
device_id = os.getenv('DEVICE_ID', 'default_device')

# MQTT настройки
mqtt_broker = 'mosquitto'
mqtt_port = 1883
mqtt_publish_topic = "esp32/pub"

HUMIDITY = random.uniform(30.0, 90.0)
TEMPERATURE = random.uniform(20.0, 30.0)
WATER_LEVEL = random.uniform(0.0, 100.0)

# Функция публикации сообщений
def publish_message(client):
    humidity = HUMIDITY + random.randint(-2, 2)
    temperature = TEMPERATURE + random.randint(-2, 2)
    water_level = WATER_LEVEL + random.randint(-2, 2)

    message = {
        "device_id": device_id,
        "humidity": humidity,
        "temperature": temperature,
        "waterLevel": water_level
    }

    json_message = json.dumps(message)
    client.publish(mqtt_publish_topic, json_message)
    print(f"Published: {json_message}")

def on_connect(client, userdata, flags, rc):
    if rc == 0:
        print(f"{device_id} connected to MQTT Broker!")
    else:
        print(f"Failed to connect, return code {rc}")

client = mqtt.Client()
client.on_connect = on_connect

# Подключаемся к MQTT брокеру
client.connect(mqtt_broker, mqtt_port, 60)
client.loop_start()

while True:
    publish_message(client)
    time.sleep(2)