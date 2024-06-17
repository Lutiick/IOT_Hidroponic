# Hydroponics Client

This is the client-side application for monitoring and visualizing data from the Hydroponics Project. It includes three charts for displaying temperature, humidity, and water level data, as well as a table for displaying plant information and other data.

## Installation

To set up and run the client, follow these steps:

1. Clone the repository:

   ```bash
   git clone https://github.com/duglas43/Team4-Hydroponics-Project
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Start the development server:

   ```bash
   npm run dev
   ```

## Features

### Charts

The client includes three charts for visualizing sensor data:

1. **Temperature Chart**: Displays temperature data over time.
2. **Humidity Chart**: Displays humidity data over time.
3. **Water Level Chart**: Displays water level data over time.

### Plant Table

The client also includes a table for displaying information about plants and other relevant data. 

## Usage

Once the client is running, open your web browser and navigate to `http://localhost:3000` to view the application. You can interact with the charts and table to view real-time data and information about the hydroponics system.

## Configuration

`VITE_SERVER_URL` - Base URL of the server API where sensor data will be sent.
