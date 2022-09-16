import React, { useState, useEffect, useRef } from "react";

import {
  Card,
  Button,
  Typography,
  CardContent,
  Container,
} from "@mui/material";

const WordCard = ({ word, english, transcription, russian, id, onClick }) => {
  const [translated, setTranslated] = useState(false);

  const handleTranslateClick = () => {
    setTranslated((prevState) => !prevState);
    //через колбэк будем передавать в родителя информацию о слове, которое было изучено:
    onClick(id);
  };

  //фокус
  const ref = useRef();
  useEffect(() => {
    setTimeout(() => {
      ref.current.focus();
    }, 0);
  }, [english]);

  //закроем перевод при перелистывании карточки
  useEffect(() => {
    setTranslated(false);
  }, [transcription]);

  return (
    <>
      <Container sx={{ p: 0 }}>
        <Card
          sx={{
            minWidth: 250,
            borderRadius: 10,
            backgroundColor: "#f9f9f9",
            boxShadow: 2,
          }}
        >
          <CardContent
            sx={{
              pt: 5,
              display: "flex",
              flexDirection: "column",
              minHeight: 250,
            }}
          >
            <Typography
              variant="h4"
              component="div"
              sx={{
                pt: 3,
              }}
            >
              {english}
            </Typography>
            <Typography sx={{ mb: 1.5, pt: 1 }} color="text.secondary">
              {transcription}
            </Typography>
            <Container
              sx={{
                pt: 7,
              }}
            >
              {translated ? (
                <Typography variant="h5" color="primary">
                  {russian}
                </Typography>
              ) : (
                <Button
                  className="translateButton"
                  variant="contained"
                  color="primary"
                  size="small"
                  sx={{
                    borderRadius: 3,
                  }}
                  onClick={handleTranslateClick}
                  ref={ref}
                >
                  Проверить
                </Button>
              )}
            </Container>
          </CardContent>
        </Card>
      </Container>
    </>
  );
};

export default WordCard;
