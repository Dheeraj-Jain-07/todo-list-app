import Button from "@mui/material/Button";
const TodoForm = (props) => {
  return (
    <form onSubmit={props.handleFormSubmit} className="todo-form">
      <input
        type="text"
        name="todo"
        placeholder="Add an item"
        ref={props.focusRef}
        onChange={props.onChange}
        value={props.value}
        className="todo-input"
      />
      <Button
        variant="contained"
        style={{
          padding: "10px",
          borderRadius: "10px",
          border: "none",
          background: "#0275d8",
          color: "#fff",
          cursor: "pointer",
          textTransform: "none",
        }}
        onClick={props.handleFormSubmit}
      >
        Add Todo
      </Button>
      <br />
      <span className="todo-error-message">{props.errorMessage}</span>
    </form>
  );
};

export default TodoForm;
