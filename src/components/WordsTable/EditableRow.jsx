import React from "react";
import { TableCell, TableRow, Button, TextField } from "@mui/material";
import { Done, DoDisturb } from "@mui/icons-material";

export default function EditableRow({
  handleSaveClick,
  handleCancelClick,
  handleEditFormChange,
  editFormData,
  word,
  //FIXME: Это в случае, если мы не используем state editFormData, а передаем дефолтное значение инпута в editablerow через defaultValue!!!
  // english,
  // transcription,
  // russian,
}) {
  return (
    <TableRow>
      <TableCell>
        <TextField
          required
          id="standard-basic"
          variant="standard"
          // FIXME:defaultValue={english}
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
          // FIXME:defaultValue={transcription}
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
          // FIXME:defaultValue={russian}
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
