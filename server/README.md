# Hydroponics Project Server

This Nest.js server provides endpoints for managing data related to plants, water levels, temperatures, and humidities for the Hydroponics Project.

## Installation

To use this server, follow these steps:

1. Clone the repository:

   ```bash
   git clone https://github.com/duglas43/Team4-Hydroponics-Project
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Run the server:

   ```bash
   npm run start
   ```

## Endpoints

### Plants

#### `POST /plants`

Creates a new plant.

**Request Body**: [CreatePlantDto](#createplantdto)

#### `GET /plants`

Retrieves all plants.

**Response Body**: Array of [PlantDto](#plantdto)

#### `GET /plants/selected`

Retrieves the selected plant.

**Response Body**: [PlantDto](#plantdto)

#### `GET /plants/:id`

Retrieves a plant by ID.

**Path Parameters**:

- `id` (integer): ID of the plant to retrieve.

**Response Body**: [PlantDto](#plantdto)

#### `PATCH /plants/:id`

Updates a plant by ID.

**Path Parameters**:

- `id` (integer): ID of the plant to update.

**Request Body**: [UpdatePlantDto](#updateplantdto)

**Response Body**: [PlantDto](#plantdto)

#### `PATCH /plants/:id/select`

Selects a plant by ID.

**Path Parameters**:

- `id` (integer): ID of the plant to select.

**Response Body**: [PlantDto](#plantdto)

#### `DELETE /plants/:id`

Deletes a plant by ID.

**Path Parameters**:

- `id` (integer): ID of the plant to delete.

**Response Body**: [PlantDto](#plantdto)

### Water Levels

#### `POST /water-levels`

Creates a new water level record.

**Request Body**: [CreateWaterLevelDto](#createwaterleveldto)

#### `GET /water-levels`

Retrieves all water level records.

**Response Body**: Array of [WaterLevelDto](#waterleveldto)

#### `GET /water-levels/last-hour`

Retrieves water level records from the last hour.

**Response Body**: Array of [WaterLevelDto](#waterleveldto)

#### `GET /water-levels/:id`

Retrieves a water level record by ID.

**Path Parameters**:

- `id` (integer): ID of the water level record to retrieve.

**Response Body**: [WaterLevelDto](#waterleveldto)

#### `PATCH /water-levels/:id`

Updates a water level record by ID.

**Path Parameters**:

- `id` (integer): ID of the water level record to update.

**Request Body**: [UpdateWaterLevelDto](#updatewaterleveldto)

**Response Body**: [WaterLevelDto](#waterleveldto)

#### `DELETE /water-levels/:id`

Deletes a water level record by ID.

**Path Parameters**:

- `id` (integer): ID of the water level record to delete.

**Response Body**: [WaterLevelDto](#waterleveldto)

### Temperatures

#### `POST /temperatures`

Creates a new temperature record.

**Request Body**: [CreateTemperatureDto](#createtemperaturedto)

#### `GET /temperatures`

Retrieves all temperature records.

**Response Body**: Array of [TemperatureDto](#temperaturedto)

#### `GET /temperatures/last-hour`

Retrieves temperature records from the last hour.

**Response Body**: Array of [TemperatureDto](#temperaturedto)

#### `GET /temperatures/:id`

Retrieves a temperature record by ID.

**Path Parameters**:

- `id` (integer): ID of the temperature record to retrieve.

**Response Body**: [TemperatureDto](#temperaturedto)

#### `PATCH /temperatures/:id`

Updates a temperature record by ID.

**Path Parameters**:

- `id` (integer): ID of the temperature record to update.

**Request Body**: [UpdateTemperatureDto](#updatetemperaturedto)

**Response Body**: [TemperatureDto](#temperaturedto)

#### `DELETE /temperatures/:id`

Deletes a temperature record by ID.

**Path Parameters**:

- `id` (integer): ID of the temperature record to delete.

**Response Body**: [TemperatureDto](#temperaturedto)

### Humidities

#### `POST /humidities`

Creates a new humidity record.

**Request Body**: [CreateHumidityDto](#createhumiditydto)

#### `GET /humidities`

Retrieves all humidity records.

**Response Body**: Array of [HumidityDto](#humiditydto)

#### `GET /humidities/last-hour`

Retrieves humidity records from the last hour.

**Response Body**: Array of [HumidityDto](#humiditydto)

#### `GET /humidities/:id`

Retrieves a humidity record by ID.

**Path Parameters**:

- `id` (integer): ID of the humidity record to retrieve.

**Response Body**: [HumidityDto](#humiditydto)

#### `PATCH /humidities/:id`

Updates a humidity record by ID.

**Path Parameters**:

- `id` (integer): ID of the humidity record to update.

**Request Body**: [UpdateHumidityDto](#updatehumiditydto)

**Response Body**: [HumidityDto](#humiditydto)

#### `DELETE /humidities/:id`

Deletes a humidity record by ID.

**Path Parameters**:

- `id` (integer): ID of the humidity record to delete.

**Response Body**: [HumidityDto](#humiditydto)

## Data Transfer

To integrate this server with sensor data collected via MQTT, you can use the [mqtt-server-transfer](https://github.com/duglas43/Team4-Hydroponics-Project/tree/master/mqtt-server-transfer) project. This project listens for MQTT messages, parses sensor data, and sends it to this server using HTTP POST requests. Follow the instructions in its README for setup and configuration.

## Configuration

To configure the server, create a .env file in the root directory of the project and add the following variables:
APP_PORT=5000 # Port on which the server will run

DB_USER=root # Database username
DB_PASS=secret # Database password
DB_NAME=hydroponics # Database name
DB_HOST=localhost # Database host
DB_PORT=3306 # Database port
DB_DIALECT=mysql # Database dialect (e.g., mysql, postgres, etc.)
