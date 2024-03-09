import { useState } from "react";
import Flashcard from "./Flashcard"

const FlashcardList = ({ flashcards }) => {

  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePreviousClick = () => {
    if(currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  }

  const handleNextClick = () => {
    if(currentIndex < flashcards.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  }

  return (
    <>
    <Flashcard flashcard={flashcards[currentIndex]} />
    <button onClick={handlePreviousClick}>Previous</button>
    <button onClick={handleNextClick}>Next</button>
    </>
  )
}

export default FlashcardList