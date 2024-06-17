import { GridColDef } from "@mui/x-data-grid";
import { PlantDto } from "../@types";
export interface usePlantsTableColumnsProps {}
export const usePlantsTableColumns = () => {
  const columns: GridColDef<PlantDto>[] = [
    {
      field: "name",
      headerName: "Name",
      flex: 0.2,
      minWidth: 100,
      filterable: false,
    },
    {
      field: "description",
      headerName: "Description",
      flex: 0.2,
      minWidth: 100,
      filterable: false,
    },

    {
      field: "nutrientVolume",
      type: "number",
      headerName: "Nutrient Volume",
      flex: 0.2,
      minWidth: 100,
      filterable: false,
    },
    {
      field: "nutrientAdditionFrequency",
      type: "number",
      headerName: "Nutrient Addition Frequency",
      flex: 0.2,
      minWidth: 100,
      filterable: false,
    },
    {
      field: "isSelected",
      headerName: "Is Selected",
      type: "boolean",
      editable: true,
      flex: 0.2,
      minWidth: 100,
      filterable: false,
    },
  ];
  return columns;
};
