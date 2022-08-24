import React from "react";
import { TableCell, TableRow, Button, TextField } from "@mui/material";
import { Done, DoDisturb } from "@mui/icons-material";

export default function EditableRow({
  handleSaveClick,
  handleCancelClick,
  handleEditFormChange,
  editFormData,
  word,
}) {
  return (
    <TableRow key={"editTableRow" + word.id}>
      <TableCell>
        <TextField
          required
          id="standard-basic"
          variant="standard"
          name="english"
          onChange={handleEditFormChange}
          value={editFormData.english}
        />
      </TableCell>
      <TableCell>
        <TextField
          required
          id="standard-basic"
          variant="standard"
          name="transcription"
          onChange={handleEditFormChange}
          value={editFormData.transcription}
        />
      </TableCell>
      <TableCell>
        <TextField
          required
          id="standard-basic"
          variant="standard"
          name="russian"
          onChange={handleEditFormChange}
          value={editFormData.russian}
        />
      </TableCell>
      <TableCell>
        {/*  Сохранение редактирования */}
        <Button
          variant="contained"
          color="success"
          size="small"
          sx={{ mr: 1 }}
          onClick={handleSaveClick}
        >
          <Done />
        </Button>

        {/* Отмена редактирования */}
        <Button
          variant="contained"
          color="warning"
          size="small"
          sx={{ mr: 1 }}
          onClick={(event) => handleCancelClick(event, word)}
        >
          <DoDisturb />
        </Button>
      </TableCell>
    </TableRow>
  );
}
