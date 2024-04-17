import React, { useState } from "react";
import CreateList from "./ToDoItem";

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

  function deleteItem(id){


    updateToDoList(prev => {
      
      return prev.filter((item, index) => {
        return index != id;
      });
    });
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
          {toDoList.map((item , index) => (
          
          <CreateList 
             key={index}
             id={index}
             text={item}
             onChecked={deleteItem}
          
          />
          
          ))}
        </ul>
      </div>

    </div>


  );
}

export default App;
