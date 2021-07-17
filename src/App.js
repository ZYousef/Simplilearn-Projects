import React, { useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";
import InputField from "./components/InputField";
import TodosList from "./components/TodosList";
import { deleteAll, persistTodos } from "./redux/action/addTodo.action";
import { connect } from "react-redux";
const App = ({ deleteAll, persistTodos }) => {
  useEffect(() => {
    persistTodos();
  }, [persistTodos]);
  return (
    <div className="App">
      {" "}
      <img src={logo} className="App-logo" alt="logo" />
      <InputField />
      <TodosList />
      <div>
        <button class="btn" onClick={deleteAll}>
          Delete All
        </button>
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  deleteAll: () => dispatch(deleteAll()),
  persistTodos: () => dispatch(persistTodos()),
});
export default connect(null, mapDispatchToProps)(App);
