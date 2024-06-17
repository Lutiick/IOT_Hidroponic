# MQTT Server Transfer

This project facilitates the transfer of sensor data received via MQTT (Message Queuing Telemetry Transport) protocol to a server via HTTP requests. It's particularly useful for scenarios where sensor data needs to be collected from IoT devices and stored or processed on a server.

## Installation

To use this project, follow these steps:

1. Clone the repository:

   ```bash
   git clone https://github.com/duglas43/Team4-Hydroponics-Project
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Set up environment variables by creating a `.env` file in the root directory and adding the following variables:

   ```plaintext
   ENDPOINT=<mqtt_broker_endpoint>
   KEY=<path_to_private_key_file>
   CERT=<path_to_certificate_file>
   CA=<path_to_ca_file>
   CLIENT_ID=<mqtt_client_id>
   SERVER_URL=<server_api_url>
   TRANSFER_INTERVAL_SECONDS=<interval_in_seconds>
   ```

   Replace `<mqtt_broker_endpoint>`, `<path_to_private_key_file>`, `<path_to_certificate_file>`, `<path_to_ca_file>`, `<mqtt_client_id>`, `<server_api_url>`, and `<interval_in_seconds>` with your actual values.

4. Run the project:

   ```bash
   npm start
   ```

## Usage

This project listens to a specific MQTT topic (`esp32/pub` by default) for incoming sensor data. It then checks the time difference since the last message received and if it exceeds the defined transfer interval, it sends the data to the specified server API endpoints via HTTP POST requests.

## Configuration

- `ENDPOINT`: MQTT broker endpoint.
- `KEY`: Path to the private key file for connecting to the MQTT broker.
- `CERT`: Path to the certificate file for connecting to the MQTT broker.
- `CA`: Path to the CA (Certificate Authority) file for connecting to the MQTT broker.
- `CLIENT_ID`: Client ID for MQTT connection.
- `SERVER_URL`: Base URL of the server API where sensor data will be sent.
- `TRANSFER_INTERVAL_SECONDS`: Interval in seconds for transferring sensor data to the server.
