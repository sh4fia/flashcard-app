import { useState } from "react"
import { Link } from "react-router-dom";

const Welcome = () => {

  const [wordList, setWorldList] = useState([{ word: '', meaning: '' }]);

  const handleWordAdd = () => {
    setWorldList([...wordList, { word: '', meaning: '' }]);
  }

  const handleWordRemove = (index) => {
    const list = [...wordList]
    list.splice(index, 1)
    setWorldList(list)
  }

  const handleWordChange = (e, index) => {
    const list = [...wordList];
    list[index][e.target.name] = e.target.value;
    setWorldList(list);
  }

  return (
    <>
      <p>welcome</p>
      {wordList.map((wordlt, index) => (
        <div key={index}>
          <label>word</label>
          <input name="word" type="text" onChange={(e) => handleWordChange(e, index)} />
          <label>meaning</label>
          <input name="meaning" type="text" onChange={(e) => handleWordChange(e, index)} />
          {wordList.length > 1 && <button onClick={() => handleWordRemove(index)}>remove</button>}
        </div>
      ))}
      <button onClick={handleWordAdd}>add</button>
      <Link to='/practice' state={{ fromWelcome: {wordList} }}>
        <div>
          <button >practice</button>
        </div>
      </Link>
    </>
  )
}

export default Welcome