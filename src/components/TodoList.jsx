/* eslint-disable no-unused-vars */
import React from "react";
import { Todo } from "./Todo";

export const TodoList = () => {
  return (
    <div className="mt-2 text-gray-700 text-sm max-h-[300px] overflow-y-auto">
      <Todo></Todo>
    </div>
  );
};
