import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

import {
  TAG_TYPES,
  CreatePlantDto,
  PlantDto,
  UpdatePlantDto,
  HumidityDto,
  TemperatureDto,
  WaterLevelDto,
} from "../../@types";

export const api = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:5000' }),
  tagTypes: [TAG_TYPES.PLANT],
  endpoints: (builder) => ({
    getPlants: builder.query<PlantDto[], void>({
      query: () => "plants",
      providesTags: [TAG_TYPES.PLANT],
    }),

    getPlant: builder.query<PlantDto, number>({
      query: (id) => `plants/${id}`,
      providesTags: [TAG_TYPES.PLANT],
    }),

    getSelectedPlant: builder.query<PlantDto, void>({
      query: () => "plants/selected",
      providesTags: [TAG_TYPES.PLANT],
    }),

    createPlant: builder.mutation<PlantDto, CreatePlantDto>({
      query: (body) => ({
        url: "plants",
        method: "POST",
        body,
      }),
      invalidatesTags: [TAG_TYPES.PLANT],
    }),

    updatePlant: builder.mutation<
      PlantDto,
      { id: number; body: UpdatePlantDto }
    >({
      query: ({ id, body }) => ({
        url: `plants/${id}`,
        method: "PATCH",
        body,
      }),
      invalidatesTags: [TAG_TYPES.PLANT],
    }),

    selectPlant: builder.mutation<PlantDto, number>({
      query: (id) => ({
        url: `plants/${id}/select`,
        method: "PATCH",
      }),
      invalidatesTags: [TAG_TYPES.PLANT],
    }),

    deletePlant: builder.mutation<PlantDto, number>({
      query: (id) => ({
        url: `plants/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: [TAG_TYPES.PLANT],
    }),

    getHumiditiesLastHour: builder.query<HumidityDto[], void>({
      query: () => "humidities/last-hour",
    }),

    getTemperaturesLastHour: builder.query<TemperatureDto[], void>({
      query: () => "temperatures/last-hour",
    }),

    getWaterLevelsLastHour: builder.query<WaterLevelDto[], void>({
      query: () => "water-levels/last-hour",
    }),
  }),
});

export const {
  useGetPlantsQuery,
  useGetPlantQuery,
  useGetSelectedPlantQuery,
  useCreatePlantMutation,
  useUpdatePlantMutation,
  useSelectPlantMutation,
  useDeletePlantMutation,
  useGetHumiditiesLastHourQuery,
  useGetTemperaturesLastHourQuery,
  useGetWaterLevelsLastHourQuery,
} = api;
