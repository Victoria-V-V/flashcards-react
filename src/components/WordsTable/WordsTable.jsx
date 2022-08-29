import React, { useState } from "react";

import WordsJson from "../../data/words.json";
import ReadOnlyRow from "./ReadOnlyRow";
import EditableRow from "./EditableRow";

import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Container,
  Box,
} from "@mui/material";

export default function WordsTable() {
  const [editWordId, setEditWordId] = useState(null);

  //Состояние (будем хранить в объекте), в котором хранятся данные формы, которые можно будет изменять:
  const [editFormData, setEditFormData] = useState({
    english: "",
    transcription: "",
    russian: "",
  });

  // Для кнопок (редактировать, сохранить, отменить, удалить,)
  const handleEditClick = (event, word) => {
    event.preventDefault();
    setEditWordId(word.id);

    //при клике "редактировать" в state editFormData записываются значения выбранного слова
    const formValues = {
      english: word.english,
      transcription: word.transcription,
      russian: word.russian,
    };
    setEditFormData(formValues);
  };

  const handleDeleteClick = () => {
    console.log("Delete");
  };

  const handleSaveClick = (event) => {
    event.preventDefault();
    setEditWordId(null);
    //TODO: сделать сохранение изменений
  };

  const handleCancelClick = (event, word) => {
    event.preventDefault();

    setEditFormData({
      english: word.english,
      transcription: word.transcription,
      russian: word.russian,
    });
  };

  //для обновления формы, когда одно из значений изменено
  const handleEditFormChange = (event) => {
    event.preventDefault();

    setEditFormData((prevData) => ({
      ...prevData,
      [event.target.getAttribute("name")]: event.target.value,
    }));
  };

  return (
    <Container maxWidth="md" sx={{ pt: 2 }}>
      <TableContainer component={Paper} sx={{ maxWidth: "400" }}>
        <Box component="form">
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>English</TableCell>
                <TableCell>Transcription</TableCell>
                <TableCell>Russian</TableCell>
                <TableCell>Actions</TableCell>
              </TableRow>
            </TableHead>

            {/* Условный рендеринг в зависимости от state. Изменение состояния при клике на кнопку редактировать в ReadOnlyRow */}
            <TableBody>
              {WordsJson.map((word) => (
                <>
                  {editWordId === word.id ? (
                    <EditableRow
                      word={word}
                      key={"editRow" + word.id}
                      handleSaveClick={handleSaveClick}
                      handleCancelClick={handleCancelClick}
                      handleEditFormChange={handleEditFormChange}
                      editFormData={editFormData}
                    />
                  ) : (
                    <ReadOnlyRow
                      word={word}
                      key={"readRow" + word.id}
                      handleEditClick={handleEditClick}
                      handleDeleteClick={handleDeleteClick}
                    />
                  )}
                </>
              ))}
            </TableBody>
          </Table>
        </Box>
      </TableContainer>
    </Container>
  );
}
