//страничка со списками слов
import * as React from "react";
import WordsJson from "../data/words.json";

import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Container,
  Button,
} from "@mui/material";

import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import DoneIcon from "@mui/icons-material/Done";
import EditIcon from "@mui/icons-material/Edit";

export default function BasicTable() {
  return (
    <Container maxWidth="md" sx={{ pt: 2 }}>
      <TableContainer component={Paper} sx={{ maxWidth: "400" }}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>№</TableCell>
              <TableCell>English</TableCell>
              <TableCell>Transcription</TableCell>
              <TableCell>Russian</TableCell>
              <TableCell>Actions</TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {WordsJson.map((word) => (
              <TableRow key={word.id}>
                <TableCell component="th" scope="row">
                  {word.id}
                </TableCell>
                <TableCell>{word.english}</TableCell>
                <TableCell>{word.transcription}</TableCell>
                <TableCell>{word.russian}</TableCell>
                <TableCell>
                  <Button
                    variant="contained"
                    color="success"
                    size="small"
                    sx={{ mr: 1 }}
                  >
                    <DoneIcon />
                  </Button>
                  <Button
                    variant="contained"
                    color="secondary"
                    size="small"
                    sx={{ mr: 1 }}
                  >
                    <EditIcon />
                  </Button>
                  <Button
                    variant="contained"
                    color="error"
                    size="small"
                    sx={{ mr: 1 }}
                  >
                    <DeleteForeverIcon />
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  );
}
