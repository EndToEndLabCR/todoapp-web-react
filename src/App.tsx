import "./App.css";
import { Task } from "./features/task/Task";

function App() {
  const title = "TODO App";

  return (
    <>
      <h1>{title}</h1>
      <Task />
    </>
  );
}

export default App;
