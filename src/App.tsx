import { Button } from "antd";
import "./App.css";

function App() {
  const title = "TODO App";

  return (
    <>
      <h1>{title}</h1>
      <p> This is a TODO app</p>
      <Button type="primary">Click me</Button>
    </>
  );
}

export default App;
