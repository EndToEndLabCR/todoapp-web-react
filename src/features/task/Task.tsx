import { PlusOutlined } from "@ant-design/icons";
import { Button, Input, Space } from "antd";
import "./Task.scss";
import { useState } from "react";

export function Task() {
  const [inputTask, setInputTask] = useState("");

  const handleAddTask = () => {
    console.log("Adding a new taks....", inputTask);
  };

  return (
    <>
      <Space.Compact style={{ width: "100%" }}>
        <Input placeholder="Add a new task" value={inputTask} onChange={(e) => setInputTask(e.target.value)} />
          <Button type="primary" onClick={handleAddTask}>
            Add
            <PlusOutlined />
        </Button>
      </Space.Compact>
    </>
  );
}
