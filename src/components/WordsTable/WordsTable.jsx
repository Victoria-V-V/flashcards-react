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

  //Состояние (будем хранить в объекте), в котором хранятся данные формы, которые можно будет изменять (также можно use defaultValue - описано в FIXME:):
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

  //TODO:TODO: При клике отмена - возврат к исходному состоянию (что-то пошло не так:((
  const handleCancelClick = () => {
    setEditFormData({
      english: "",
      transcription: "",
      russian: "",
      // english: word.english,
      // transcription: word.transcription,
      // russian: word.russian,
      //Warning: A component is changing a controlled input to be uncontrolled. This is likely caused by the value changing from a defined to undefined, which should not happen. Decide between using a controlled or uncontrolled input element for the lifetime of the component. More info: https://reactjs.org/link/controlled-components
    });
  };

  //для обновления формы, когда одно из значений изменено
  const handleEditFormChange = (event) => {
    event.preventDefault();

    const fieldName = event.target.getAttribute("name");
    const fieldValue = event.target.value;
    const newFormData = { ...editFormData };
    newFormData[fieldName] = fieldValue;
    setEditFormData(newFormData);

    //или краткая запись 70-74 строк:
    // setEditFormData({
    //   ...editFormData,
    //   [event.target.getAttribute("name")]: event.target.value,
    // });
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
                      handleSaveClick={handleSaveClick}
                      handleCancelClick={handleCancelClick}
                      handleEditFormChange={handleEditFormChange}
                      editFormData={editFormData}
                      //FIXME: Это в случае, если мы не используем state editFormData, а передаем дефолтное значение инпута в editablerow через defaultValue!!!
                      // english={word.english}
                      // transcription={word.transcription}
                      // russian={word.russian}
                    />
                  ) : (
                    <ReadOnlyRow
                      word={word}
                      // key={word.id}
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
