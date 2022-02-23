import HOC from "./HOC";

const TodoList = ({ data }) => {
  let renderTodos = data.map((user) => {
    return (
      <div key={user.id}>
        <p>
          <strong>{user.name}</strong>
        </p>
      </div>
    );
  });
  return (
    <div>
      <div>{renderTodos}</div>
    </div>
  );
};

const SearchUser = HOC(TodoList, "users");

export default SearchUser;