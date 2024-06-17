import { FC } from "react";
import { Box } from "@mui/material";
import { DataGrid, DataGridProps, GridValidRowModel } from "@mui/x-data-grid";
import { usePlantsTableColumns } from "./PlantsTableColumns";
import { darken, lighten, styled } from "@mui/material/styles";
import {
  useGetPlantsQuery,
  useSelectPlantMutation,
  useUpdatePlantMutation,
} from "../store/api";
import { PlantDto } from "../@types";

const StyledDataGrid = styled(DataGrid)(({ theme }) => ({
  "& .selected-row": {
    backgroundColor: theme.palette.primary.light,
    color: theme.palette.primary.contrastText,

    "&:hover": {
      backgroundColor: darken(theme.palette.primary.light, 0.2),
    },

    "&.Mui-selected": {
      backgroundColor: lighten(theme.palette.primary.light, 0.2),
      "&:hover": {
        backgroundColor: lighten(theme.palette.primary.light, 0.2),
      },
    },
  },
}));

export const PlantsTable: FC<Partial<DataGridProps>> = (props) => {
  const { data, isLoading } = useGetPlantsQuery();
  const [selectPlant, { isLoading: isSelecting }] = useSelectPlantMutation();
  const [updatePlant, { isLoading: isCreating }] = useUpdatePlantMutation();
  const columns = usePlantsTableColumns();

  const handleProcessRowUpdate = async (
    updatedRow: GridValidRowModel,
    originalRow: GridValidRowModel
  ) => {
    try {
      if (updatedRow.isSelected === originalRow.isSelected) return updatedRow;
      if (updatedRow.isSelected) {
        await selectPlant(updatedRow.id).unwrap();
      } else {
        await updatePlant({ id: updatedRow.id, body: updatedRow }).unwrap();
      }
      return updatedRow;
    } catch (e) {
      return originalRow;
    }
  };

  return (
    <Box sx={{ height: "400px" }}>
      <StyledDataGrid
        columns={columns as any}
        rows={data || []}
        onRowDoubleClick={(params) => {
          const row = params.row as PlantDto;
          if (row.isSelected) return;
          selectPlant(row.id);
        }}
        loading={isLoading || isCreating || isSelecting || props.loading}
        getRowClassName={(params) => params.row.isSelected && "selected-row"}
        processRowUpdate={handleProcessRowUpdate}
        {...props}
      />
    </Box>
  );
};
