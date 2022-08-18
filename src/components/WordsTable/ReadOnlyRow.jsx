import React from "react";
import { TableCell, TableRow, Button } from "@mui/material";
import { DeleteForever, Edit } from "@mui/icons-material";

export default function ReadOnlyRow({
  word,
  handleEditClick,
  handleDeleteClick,
}) {
  return (
    <TableRow key={word.id}>
      <TableCell component="th" scope="row">
        {word.english}
      </TableCell>
      <TableCell>{word.transcription}</TableCell>
      <TableCell>{word.russian}</TableCell>
      <TableCell>
        {/*  Открытие режима редактирования */}
        <Button
          variant="contained"
          color="secondary"
          size="small"
          sx={{ mr: 1 }}
          onClick={(event) => handleEditClick(event, word)}
        >
          <Edit />
        </Button>

        {/*  Удаление слова из списка */}
        <Button
          variant="contained"
          color="error"
          size="small"
          sx={{ mr: 1 }}
          onClick={handleDeleteClick}
        >
          <DeleteForever />
        </Button>
      </TableCell>
    </TableRow>
  );
}
