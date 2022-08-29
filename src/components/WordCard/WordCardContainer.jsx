import React, { useState } from "react";
import Card from "./WordCard";
import KeyboardDoubleArrowLeftIcon from "@mui/icons-material/KeyboardDoubleArrowLeft";
import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";
// import RepeatIcon from '@mui/icons-material/Repeat';
import { Container, Button } from "@mui/material";
import WordsJson from "../../data/words.json";

const WordCardContainer = () => {
  // const [words, setWords] = useState(WordsJson); //пока просто переменная с данными в состоянии:
  const [words] = useState(WordsJson);
  const [indexCard, setIndexCard] = useState(0);
  const [currentIndex, setCurrentIndex] = useState(null);

  const switchCards = (direction) => {
    let newIndex = indexCard;

    switch (direction) {
      case "right":
        ++newIndex;
        if (newIndex === words.length) {
          newIndex = 0;
        }
        break;
      case "left":
        --newIndex;
        break;

      //TODO: вынести в колбэк для setIndexCard, чтобы текущий индекс всегда был актуальный...
      default:
        ++newIndex;
    }
    setIndexCard(newIndex);

    //TODO:  ...И код ниже вынести в эффект
    if (newIndex !== 0) {
      setCurrentIndex(true);
    } else setCurrentIndex(false);
  };

  return (
    <>
      <Container
        className="WordCardContainer"
        sx={{
          mt: 10,
          display: "flex",
          justifyContent: "center",
          mr: "auto",
          ml: "auto",
          alignItems: "stretch",
          flexBasis: "0",
          maxWidth: { xs: 400, md: 500 },
        }}
      >
        {currentIndex ? (
          <Button color="primary" onClick={() => switchCards("left")}>
            <KeyboardDoubleArrowLeftIcon fontSize="large" color="inherit" />
          </Button>
        ) : (
          ""
        )}

        <Card
          word={words}
          english={words[indexCard].english}
          transcription={words[indexCard].transcription}
          russian={words[indexCard].russian}
        ></Card>

        <Button color="primary" onClick={() => switchCards("right")}>
          <KeyboardDoubleArrowRightIcon fontSize="large" color="primary" />
        </Button>
      </Container>
    </>
  );
};

export default WordCardContainer;
