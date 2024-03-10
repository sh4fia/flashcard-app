import { Link, useLocation } from "react-router-dom"
import FlashcardList from "./FlashcardList";

const Practice = () => {

    const location = useLocation();
    const { fromWelcome } = location.state;
    let data = fromWelcome.wordList;

    return (
        <>
        <FlashcardList from='practice' flashcards={data} />
            <Link to='/'>
                <button >go back</button>
            </Link>
            <Link to='/test' state={{ fromPractice: {data} }}>
                <button >test</button>
            </Link>
        </>
    )
}

export default Practice