import React from "react";
import useTodo from "../hooks/useTodo";
import { IoMdEye } from "react-icons/io";
import { FaPen, FaTrashAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

function TodoList() {
  const {
    data: { todo },
    deleteTodo,
    nextPage,
    prevPage,
    next_page_url,
    prev_page_url,
    currentPage,
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
            <Link
              to={"/show/" + t.id}
              className="bg-green-400 text-white p-2 rounded-md"
            >
              <IoMdEye />
            </Link>
            <Link
              to={"/edit/" + t.id}
              className="bg-yellow-400 text-white p-2 rounded-md"
            >
              <FaPen />
            </Link>
            <button
              className="bg-red-400 text-white p-2 rounded-md"
              onClick={deleteTodo.bind(this, t.id)}
            >
              <FaTrashAlt />
            </button>
          </div>
        </div>
      ))}
      <div className="flex justify-center items-center gap-3">
        <button
          className={`py-2 px-8 rounded-md text-white font-semibold ${
            prev_page_url ? "bg-teal-400" : "bg-teal-200"
          }`}
          onClick={prevPage}
        >
          Prev
        </button>
        <h1 className="text-lg font-semibold">{currentPage}</h1>
        <button
          className={`py-2 px-8 rounded-md text-white font-semibold ${
            next_page_url ? "bg-violet-400" : "bg-violet-200"
          }`}
          onClick={nextPage}
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default TodoList;
