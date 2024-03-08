import Flashcard from "./Flashcard"

const FlashcardList = ({ flashcards }) => {
  return (
    <>
    {flashcards.map(flashcard => (
       <Flashcard flashcard={flashcard} key={flashcard.id} />
    ))}
    </>
  )
}

export default FlashcardList