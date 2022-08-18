import React, { useState } from "react";
// import styled from "styled-components";
import {
  Card,
  Button,
  Typography,
  CardContent,
  Container,
} from "@mui/material";

// const Title = styled.h1`
//   font-size: 1.5em;
//   text-align: center;
//   color: palevioletred;
// `;

export default function WordCard() {
  const [translated, setTranslated] = useState(false);

  const handleTranslateClick = () => {
    setTranslated((prevState) => !prevState);
  };

  return (
    <>
      {/* <Title>Test</Title> */}
      <Container
        maxWidth="md"
        sx={{ pt: 10, display: "flex", justifyContent: "center" }}
      >
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
              vegetables
            </Typography>
            <Typography sx={{ mb: 1.5, pt: 1 }} color="text.secondary">
              ['veʤ(ə)təblz]
            </Typography>
            <Container
              sx={{
                pt: 7,
              }}
            >
              {translated ? (
                <Typography variant="h5" color="primary">
                  овощи
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
