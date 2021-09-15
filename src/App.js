import Characters from "./components/Characters";
import { useState, useEffect } from "react";

function App() {
  const [characterList, setCharacterList] = useState([]);
  const [currentPage, setCurrentPage] = useState(
    "https://rickandmortyapi.com/api/character/"
  );

  useEffect(() => {
    if (currentPage !== null) {
      fetch(`${currentPage}`)
        .then((response) => response.json())
        .then((response) => {
          setCharacterList([...characterList, ...response.results]);
          setCurrentPage(response.info.next);
          console.log(characterList);
        });
    }
  }, [currentPage]);

  return (
    <div className="container">
      <Characters characterList={characterList} />
    </div>
  );
}

export default App;
