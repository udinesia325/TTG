import React from "react";
import useTodo from "../hooks/useTodo";
import { IoMdEye } from "react-icons/io";
import { FaPen, FaTrashAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

function TodoList() {
  const {
    data: { todo },
  } = useTodo();

  if (!todo) {
    return <h1 className="text-center text-lg font-semibold mt-5">Loading</h1>;
  }
  return (
    <div className="flex flex-col gap-3 w-full pt-8 max-w-full">
      {todo.data.map((t) => (
        <div
          key={t.id}
          className="w-full shadow-md rounded-md p-3 flex justify-between border border-gray-100"
        >
          <h1 className="text-lg font-semibold max-w-sm">{t.title}</h1>
          <div className="flex items-center gap-x-3">
            <Link to={"/show/" + t.id} className="bg-green-400 text-white p-2 rounded-md">
              <IoMdEye  />
            </Link>
            <Link to={"/edit/" + t.id} className="bg-yellow-400 text-white p-2 rounded-md">
              <FaPen  />
            </Link>
            <Link to={"/delete/" + t.id} className="bg-red-400 text-white p-2 rounded-md">
              <FaTrashAlt  />
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
}

export default TodoList;
