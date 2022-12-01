import DeleteIcon from "@mui/icons-material/Delete";
import StarOutlineIcon from "@mui/icons-material/StarOutline";
import StarIcon from "@mui/icons-material/Star";
import CheckIcon from "@mui/icons-material/Check";
import CloseIcon from "@mui/icons-material/Close";

const TodoListItem = (props) => {
  return props.todos.length !== 0 ? (
    <>
      {props.todos
        .sort((item1, item2) =>
          item1.isImportant < item2.isImportant ? 1 : -1
        )
        .map((todo) => {
          return (
            <div key={todo.id} className="todo-app">
              <p
                className={
                  todo.isComplete ? "todo-complete" : "todo-incomplete"
                }
              >
                {todo.task}
              </p>
              <div className="todo-icons">
                <div className="todo-complete-icon">
                  {todo.isComplete ? (
                    <CloseIcon
                      onClick={() => {
                        props.handleTodoCompleteOrIncomplete(todo.id);
                      }}
                    />
                  ) : (
                    <CheckIcon
                      onClick={() => {
                        props.handleTodoCompleteOrIncomplete(todo.id);
                      }}
                    />
                  )}
                </div>
                {!todo.isComplete ? (
                  <div className="todo-important-icon">
                    {todo.isImportant ? (
                      <StarIcon
                        onClick={() => {
                          props.hadleMarkOrUnmarkImportant(todo.id);
                        }}
                      />
                    ) : (
                      <StarOutlineIcon
                        onClick={() => {
                          props.hadleMarkOrUnmarkImportant(todo.id);
                        }}
                      />
                    )}
                  </div>
                ) : (
                  ""
                )}

                <div className="todo-delete-icon">
                  <DeleteIcon
                    onClick={() => {
                      props.handleTodoDelete(todo.id);
                    }}
                  />
                </div>
              </div>
            </div>
          );
        })}
    </>
  ) : (
    <h2>Your todo list is empty</h2>
  );
};

export default TodoListItem;
