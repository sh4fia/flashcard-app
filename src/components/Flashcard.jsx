import { useState } from "react"


const Flashcard = ({ flashcard, from }) => {

  const [flip, setFlip] = useState(false);

  return (
    <>
      {from === 'practice' && <div className={`card ${flip ? 'flip' : ''}`} onClick={() => setFlip(!flip)}>
        <div className="front">
          {flashcard.word}
        </div>
        <div className="back">{flashcard.meaning}</div>
      </div>
      }
      {
        from === 'test' && <>
          <div className='card'>
            <div className="front">
              {flashcard.word}
            </div>
          </div>
        </>
      }
    </>
  )
}

export default Flashcard