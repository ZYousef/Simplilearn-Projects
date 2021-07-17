import React from "react";
import { connect } from "react-redux";
import { deleteTodo, editTodo } from "../redux/action/addTodo.action";

const Todo = ({ todo, idx, deleteTodo, editTodo, selected, text }) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        border: "2px solid #61dafb",
        borderRadius: "10px",
        padding: "5px",
        cursor: "pointer",
        margin: "1px",
      }}
    >
      <div onClick={() => editTodo(idx)}>{selected === idx ? text : todo}</div>
      <div
        style={{ cursor: "pointer", color: "red" }}
        onClick={() => deleteTodo(idx)}
      >
        x
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  deleteTodo: (key) => dispatch(deleteTodo(key)),
  editTodo: (key) => dispatch(editTodo(key)),
});

const mapStateToProps = ({ text, selected }) => ({
  text,
  selected,
});
export default connect(mapStateToProps, mapDispatchToProps)(Todo);
