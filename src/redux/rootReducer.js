import { combineReducers } from "redux";
import todoReducer from "../redux/todos/reducer";
import filtersReducer from "../redux/filters/reducer";

const rootReducer = combineReducers({
  todos: todoReducer,
  filters: filtersReducer,
});

export default rootReducer;
