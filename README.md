# Hydroponics Project

The Hydroponics Project is a system for monitoring and managing hydroponic gardening setups. It consists of several components housed within a single repository, each serving a specific purpose:

## 1. Client

The `client` directory contains the client-side application for visualizing data collected from the hydroponic system. It includes charts for displaying temperature, humidity, and water level data, as well as a table for presenting plant information and other relevant data.

Refer to the [Client README](client/README.md) for detailed setup and usage instructions.

## 2. Server

The `server` directory contains the server-side application responsible for handling data storage, retrieval, and management. It provides API endpoints for interacting with the hydroponic system, managing plants, storing sensor data, and more.

Refer to the [Server README](server/README.md) for detailed setup and configuration instructions.

## 3. MQTT Server Transfer

The `mqtt-server-transfer` directory contains a utility for transferring sensor data received via MQTT (Message Queuing Telemetry Transport) protocol to the server using HTTP requests. This component bridges the communication gap between Arduino-based sensors, and the server.

Refer to the [MQTT Server Transfer README](mqtt-server-transfer/README.md) for detailed setup and usage instructions.

## 4. Hardware

The `hardware` directory contains code and resources for the Arduino-based hardware components used in the hydroponic system. This includes sensor modules, actuators, and other hardware peripherals necessary for data collection and system control.

Refer to the documentation within the `hardware` directory for specific hardware setup and usage instructions.

## Usage

To utilize the Hydroponics Project, follow these general steps:

1. Set up the hardware components according to the instructions provided in the `hardware` directory.

2. Configure and deploy the server-side application using the instructions in the [Server README](server/README.md).

3. Configure and run the client-side application using the instructions in the [Client README](client/README.md).

4. Set up the MQTT Server Transfer utility as described in its [README](mqtt-server-transfer/README.md).

5. Begin monitoring and managing your hydroponic system using the client application, while data is collected and transferred to the server for storage and analysis.
