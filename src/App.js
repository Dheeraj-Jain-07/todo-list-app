import { useEffect, useRef, useState } from "react";
import "./App.css";
import Button from "@mui/material/Button";
import TodoForm from "./components/TodoForm";
import TodoListItem from "./components/TodoListItem";

function App() {
  const [userInput, setUserInput] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [todos, setTodos] = useState([]);
  const inputRef = useRef(null);

  const handleFormSubmit = (event) => {
    event.preventDefault();
    if (userInput !== "") {
      let newTodo = {
        id: todos.length + 1,
        task: userInput,
        isImportant: false,
        isComplete: false,
      };
      setErrorMessage("");
      setTodos([newTodo, ...todos]);
      setUserInput("");
    } else {
      setErrorMessage("Please enter a valid item");
      setTimeout(() => {
        setErrorMessage("");
      }, 2000);
    }
  };
  const handleInputChange = (event) => {
    setUserInput(event.target.value);
  };

  const handleTodoCompleteOrIncomplete = (todoId) => {
    let updatedTodos = todos.map((todo) => {
      if (todo.id === todoId) {
        todo.isComplete = !todo.isComplete;
        todo.isImportant = false;
      }
      return todo;
    });
    updatedTodos.sort((item1, item2) =>
      item1.isComplete > item2.isComplete ? 1 : -1
    );
    setTodos(updatedTodos);
  };

  const handleTodoDelete = (todoId) => {
    const filteredTodos = todos.filter((todo) => {
      return todo.id !== todoId;
    });

    setTodos(filteredTodos);
  };

  const hadleMarkOrUnmarkImportant = (todoId) => {
    let updatedTodos = todos.map((todo) => {
      if (todo.id === todoId) {
        todo.isImportant = !todo.isImportant;
      }
      return todo;
    });
    setTodos(updatedTodos);
  };

  const deleteAllTodos = () => {
    setTodos([]);
    setUserInput("");
  };

  useEffect(() => {
    inputRef.current.focus();
  });

  return (
    <div className="todo-container">
      <h1 className="todo-title">Todo List</h1>
      <TodoForm
        focusRef={inputRef}
        value={userInput}
        onChange={handleInputChange}
        handleFormSubmit={handleFormSubmit}
        errorMessage={errorMessage}
      />
      <TodoListItem
        todos={todos}
        hadleMarkOrUnmarkImportant={hadleMarkOrUnmarkImportant}
        handleTodoCompleteOrIncomplete={handleTodoCompleteOrIncomplete}
        handleTodoDelete={handleTodoDelete}
      />
      {todos.length !== 0 && (
        <div className="delete-all-todos-button">
          <Button
            variant="contained"
            style={{
              textTransform: "none",
              borderRadius: "10px",
            }}
            onClick={deleteAllTodos}
          >
            Delete All
          </Button>
        </div>
      )}
    </div>
  );
}

export default App;
