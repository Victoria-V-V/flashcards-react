import React, { useState, useEffect } from "react";

import {
  Card,
  Button,
  Typography,
  CardContent,
  Container,
} from "@mui/material";

export default function WordCard(word) {
  const [translated, setTranslated] = useState(false);

  const handleTranslateClick = () => {
    setTranslated((prevState) => !prevState);
  };

  //закроем перевод при перелистывании карточки
  useEffect(() => {
    setTranslated(false);
  }, [word]);

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
              {word.english}
            </Typography>
            <Typography sx={{ mb: 1.5, pt: 1 }} color="text.secondary">
              {word.transcription}
            </Typography>
            <Container
              sx={{
                pt: 7,
              }}
            >
              {translated ? (
                <Typography variant="h5" color="primary">
                  {word.russian}
                </Typography>
              ) : (
                <Button
                  variant="contained"
                  color="primary"
                  size="small"
                  sx={{
                    borderRadius: 3,
                  }}
                  onClick={handleTranslateClick}
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
}
