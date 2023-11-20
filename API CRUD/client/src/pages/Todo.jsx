import React from "react";
import { Link, Outlet } from "react-router-dom";
import { FaPlusCircle } from "react-icons/fa";

function Todo() {
  return (
    <div className="mx-auto mt-2 w-full max-w-3xl min-h-[90vh] shadow-lg rounded-md overflow-hidden">
      <div className="w-full bg-gradient-to-br from-green-400 to-teal-400 p-6 flex justify-between items-center">
        <h1 className="text-3xl font-black text-white">Todo App</h1>
        <Link className='text-2xl' to="add"><FaPlusCircle className="text-white" /></Link>
      </div>
      <div className="p-2">
        <Outlet />
      </div>
    </div>
  );
}

export default Todo;
