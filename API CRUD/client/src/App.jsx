import { Route, Routes } from "react-router-dom";
import "./App.css";
import Todo from "./pages/Todo";
import Login from "./pages/Login";
import TodoList from "./components/TodoList";
import TodoAdd from "./components/TodoAdd";
import TodoDetail from "./components/TodoDetail";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Todo />}>
        <Route path="/" element={<TodoList />} />
        <Route path="/add" element={<TodoAdd />} />
        <Route path="/show/:id" element={<TodoDetail />} />
      </Route>
      <Route path="/login" element={<Login />} />
    </Routes>
  );
}

export default App;
