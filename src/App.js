import React from "react";
import ReactDOM from "react-dom";

const App = () => {
  return (
    <div id="todos">
      <h1>To-Do-List</h1>
      <ul id="todoList"></ul>
      <div class="addTodo">
        <input type="text" placeholder="Add something" id="newTodo" />
        <button id="add">Add</button>
      </div>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
