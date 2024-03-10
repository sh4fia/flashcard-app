import { useState } from "react";
import Flashcard from "./Flashcard"

const FlashcardList = ({ flashcards, from }) => {

  const [currentIndex, setCurrentIndex] = useState(0);
  const [correctAnswer, setCorrectAnswer] = useState(false);
  const [answer, setAnswer] = useState("");

  const handlePreviousClick = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  }

  const handleNextClick = () => {
    if (from === 'test') {
      setCorrectAnswer(false);
    }
    if (currentIndex < flashcards.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  }

  const handleInputChange = (e) => {
    e.preventDefault();
    flashcards[currentIndex].meaning === answer && setCorrectAnswer(!correctAnswer);
    setAnswer("");
  }

  return (
    <>
      {from === 'practice' && <>
        <p>{currentIndex + 1}/{flashcards.length}</p>
        <Flashcard from={from} flashcard={flashcards[currentIndex]} />
        {flashcards.length > 1 &&
          <>
            <button onClick={handlePreviousClick}>Previous</button>
            <button onClick={handleNextClick}>Next</button>
          </>
        }
      </>}
      {from === 'test' && <>
        {correctAnswer && <p>Answer is correct</p>}
        <p>{currentIndex + 1}/{flashcards.length}</p>
        <Flashcard from={from} flashcard={flashcards[currentIndex]} />
        {!correctAnswer && <form onSubmit={handleInputChange}>
          <label>Meaning</label>
          <input name="answer" type="text" value={answer} onChange={(e) => setAnswer(e.target.value)} />
          <button type="submit">check answer</button>
        </form>}
        {correctAnswer && flashcards[currentIndex].index + 1 !== flashcards.length && <button onClick={handleNextClick}>Next</button>}
      </>}
    </>
  )
}

export default FlashcardList