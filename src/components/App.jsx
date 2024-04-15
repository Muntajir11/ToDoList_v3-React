import React, { useState } from "react";

function App() {

  const [inputText, setInputText] = useState("");
  const [toDoList, updateToDoList] = useState([]);


  function handleChange(event) {

    const newText = event.target.value;
    setInputText(newText);
  }

  function addList() {

    updateToDoList(prev => {
      // if(inputText != '')
      // {
      //   return [...prev, inputText];
      // } else {
      //   return [...prev];
      // }

      return inputText != '' ? [...prev, inputText] : [...prev];

    });
    setInputText("");
  }

  return (
    <div className="container">

      <div className="heading">
        <h1>To-Do List</h1>
      </div>

      <div className="form">
        <input onChange={handleChange} type="text" value={inputText} />
        <button onClick={addList}>
          <span>Add</span>
        </button>
      </div>

      <div>
        <ul>
          {toDoList.map(item => <li> {item} </li>)}
        </ul>
      </div>

      <div className="refresh">
        <p>Refresh the page to reset!</p>
      </div>

    </div>


  );
}

export default App;
