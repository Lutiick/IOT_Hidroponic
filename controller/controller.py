import time
import random
import paho.mqtt.client as mqtt
from threading import Timer
import json

# Constants
SYSTEM_DELAY = 1  # seconds
NUTRIENT_MOTOR_FLOW_RATE = 1.0 / 1000  # 0.001 cc/ms
WATER_MOTOR_FLOW_RATE = 1.0 / 1000  # 0.001 cc/ms
WATER_LEVEL_MIN = 1000  # 0.5 cm
WATER_LEVEL_MAX = 2000  # 2.0 cm
WATER_LEVEL_SENSOR_READ_INTERVAL = 1  # seconds

# System variables
previous_water_time = time.time()
previous_nutrient_time = time.time()
last_time_nutrient_motor_started = time.time()

is_water_motor_running = False
is_nutrient_motor_running = False
selected_plant = None

# MQTT Configuration
BROKER = "mosquitto"
PORT = 1883  # Port for MQTT
TOPIC = "esp32/controller"

log = open('/controller/log.txt', 'w')

class Plant:
    def __init__(self, id, name, description, nutrient_volume, nutrient_addition_frequency, is_selected, last_time_nutrient_added):
        self.id = id
        self.name = name
        self.description = description
        self.nutrient_volume = nutrient_volume
        self.nutrient_addition_frequency = nutrient_addition_frequency
        self.is_selected = is_selected
        self.last_time_nutrient_added = last_time_nutrient_added

def on_connect(client, userdata, flags, rc):
    print("Connected to MQTT broker with result code " + str(rc), file=log)
    client.subscribe(TOPIC)

def on_message(client, userdata, msg):
    global selected_plant
    print("Message received: " + msg.topic + " " + str(msg.payload), file=log)
    data = json.loads(msg.payload.decode())
    selected_plant = Plant(data['id'], data['name'], data['description'], data['nutrientVolume'],
                           data['nutrientAdditionFrequency'], data['isSelected'], data['lastTimeNutrientAdded'])

def is_time_to_check_water_level(current_time, previous_time, interval):
    return current_time - previous_time >= interval

def is_time_to_check_nutrient_level(current_time, previous_time, interval):
    return current_time - previous_time >= interval

def is_water_needed(water_level):
    return water_level <= WATER_LEVEL_MIN

def is_water_level_excessive(water_level):
    return water_level >= WATER_LEVEL_MAX

def water_plants():
    global is_water_motor_running
    print("Water motor started", file=log)
    is_water_motor_running = True

def stop_watering_plants():
    global is_water_motor_running
    print("Water motor stopped", file=log)
    is_water_motor_running = False

def nutrient_plants():
    global is_nutrient_motor_running
    print("Nutrient motor started", file=log)
    is_nutrient_motor_running = True

def stop_nutrient_plants():
    global is_nutrient_motor_running
    print("Nutrient motor stopped", file=log)
    is_nutrient_motor_running = False

def main_loop():
    global previous_water_time, previous_nutrient_time, last_time_nutrient_motor_started
    current_time = time.time()
    water_level = random.randint(0, 3000)  # Mocking water level sensor

    if selected_plant:
        if is_time_to_check_water_level(current_time, previous_water_time, WATER_LEVEL_SENSOR_READ_INTERVAL):
            if is_water_needed(water_level) and not is_water_motor_running:
                water_plants()
            if is_water_level_excessive(water_level) and is_water_motor_running:
                stop_watering_plants()
            previous_water_time = current_time

        if is_time_to_check_nutrient_level(current_time, previous_nutrient_time, selected_plant.nutrient_addition_frequency):
            if not is_nutrient_motor_running:
                nutrient_plants()
                last_time_nutrient_motor_started = current_time
            if is_nutrient_motor_running and current_time - last_time_nutrient_motor_started > selected_plant.nutrient_volume / NUTRIENT_MOTOR_FLOW_RATE:
                stop_nutrient_plants()
                previous_nutrient_time = current_time

    Timer(SYSTEM_DELAY, main_loop).start()

# MQTT Client Setup
client = mqtt.Client()
client.on_connect = on_connect
client.on_message = on_message

client.connect(BROKER, PORT, 60)
client.loop_start()

if __name__ == "__main__":
    main_loop()