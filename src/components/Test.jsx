import { Link, useLocation } from "react-router-dom"
import FlashcardList from "./FlashcardList";

const Test = () => {

    const location = useLocation();
    const { fromPractice } = location.state;
    let data = fromPractice.data;

    return (
        <>
            <FlashcardList from='test' flashcards={data} />
            <Link to='/'>
                <button >go back</button>
            </Link>
        </>
    )
}

export default Test