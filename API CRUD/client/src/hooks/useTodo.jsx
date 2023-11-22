import React, { useEffect, useState } from "react";
import { backendUrl } from "../utils/backendUrl";
import { toast } from "react-toastify";

function useTodo() {
  const [data, setData] = useState({});
  const [page, setPage] = useState(1);
  const controller = new AbortController();

  let url = backendUrl("GetAll?page=" + page);

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
  }, [page]);


  async function deleteTodo(id) {
    try {
      const filteredTodo = data.todo.data.filter((td) => td.id != id);
      await fetch(backendUrl("Delete/") + id, {
        method: "DELETE",
      });
      setData({ ...data, todo:  {...data.todo, data: filteredTodo } });
      toast.success("Berhasil dihapus");
    } catch (err) {
      toast.error("Gagal Dihapus");
      console.log({ err });
    }
  }

  function nextPage() {
    if (data?.todo.next_page_url) {
      setPage((page) => page + 1);
    }
  }
  function prevPage() {
    if (data?.todo.prev_page_url) {
      setPage((page) => page - 1);
    }
  }

  return {
    data,
    deleteTodo,
    nextPage,
    prevPage,
    currentPage:data?.todo?.current_page || 1,
    next_page_url: data?.todo?.next_page_url,
    prev_page_url: data?.todo?.prev_page_url,
  };
}

export default useTodo;
