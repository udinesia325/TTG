import React, { useEffect, useState } from "react";
import { backendUrl } from "../utils/backendUrl";
import { toast } from "react-toastify";

function useTodo() {
  const [data, setData] = useState({});
  const controller = new AbortController();
  
    let url = backendUrl("GetAll");
  

  const fetchData = async () => {
    try {
      const response = await fetch(url, { signal: controller.signal });
      const data = await response.json();
      setData(data);
    } catch (err) {
      console.log({ err });
    }
  };
  useEffect(() => {
    fetchData();
  }, []);

  async function deleteTodo(id) {
    try {
      const filteredTodo = data.todo.data.filter((td) => td.id != id);
      await fetch(backendUrl("Delete/") + id, {
        method: "DELETE",
      });
      setData({ ...data, todo: { data: filteredTodo } });
      toast.success("Berhasil dihapus");
    } catch (err) {
      toast.error("Gagal Dihapus");
      console.log({ err });
    }
  }

  return { data, deleteTodo };
}

export default useTodo;
