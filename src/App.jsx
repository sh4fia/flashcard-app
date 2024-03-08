import { useState } from 'react';
import './App.css'
import FlashcardList from './components/FlashcardList';
import Flashcard from './components/Flashcard';
import Welcome from './components/Welcome';

function App() {

  // const [cards, setCards] = useState(cardslist);

  return (
    <>
    <Welcome />
    {/* <FlashcardList flashcards={cards} /> */}
    </>
  )
}

    // user list
    // const cardslist = [
    //   {
    //     id: 1,
    //     word: 'hello',
    //     meaning: 'annyeong'
    //   },
    //   {
    //     id: 2,
    //     word: 'rice',
    //     meaning: 'bap'
    //   },
    //   {
    //     id: 3,
    //     word: 'cloud',
    //     meaning: 'geureum'
    //   }
    // ]

export default App
