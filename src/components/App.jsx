import React, { useState } from "react";
import CreateList from "./ToDoItem";
import InputArea from "./InputArea";

function App() {


  const [toDoList, updateToDoList] = useState([]);


  function addList(inputText) {

    updateToDoList(prev => {
      // if(inputText != '')
      // {
      //   return [...prev, inputText];
      // } else {
      //   return [...prev];
      // }

      return inputText != '' ? [...prev, inputText] : [...prev];

    });
  }

  function deleteItem(id) {
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

      <InputArea
        onAdd={addList}
      />

      <div>
        <ul>
          {toDoList.map((item, index) => (

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
