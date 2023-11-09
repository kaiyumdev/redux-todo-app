/* eslint-disable no-unused-vars */
import { COLORSELECTED } from "../actionTypes";
import { toggled } from "../actions";

const updateColor = (todoId, color) => {
  return async (dispatch) => {
    const response = await fetch(`http://localhost:9000/todos/${todoId}`, {
      method: "PATCH",
      body: JSON.stringify({
        completed: color,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    });
    const todo = await response.json();

    dispatch(COLORSELECTED(todo.id, todo.color));
  };
};

export default updateColor;
