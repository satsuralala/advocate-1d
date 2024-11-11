import React, { useState } from "react";
import axios from "axios";

const TaskForm = () => {
  const [taskName, setTaskName] = useState("");
  const [priority, setPriority] = useState(1);
  const [taskId, setTaskId] = useState<string | null>(null); // For updating tasks
  const [isDone, setIsDone] = useState(false);

  const handleAddTask = async () => {
    const query = `
      mutation {
        addTask(taskName: "${taskName}", priority: ${priority}) {
          _id
          taskName
          priority
          isDone
          createdAt
          updatedAt
        }
      }
    `;

    try {
      const response = await axios.post("/api/graphql", { query });
      console.log("Task Added:", response.data);
    } catch (error) {
      console.error("Error adding task:", error);
    }
  };

  const handleUpdateTask = async () => {
    if (!taskId) return;

    const query = `
      mutation {
        updateTask(_id: "${taskId}", taskName: "${taskName}", priority: ${priority}, isDone: ${isDone}) {
          _id
          taskName
          priority
          isDone
          updatedAt
        }
      }
    `;

    try {
      const response = await axios.post("/api/graphql", { query });
      console.log("Task Updated:", response.data);
    } catch (error) {
      console.error("Error updating task:", error);
    }
  };

  return (
    <div>
      <input
        type="text"
        value={taskName}
        onChange={(e) => setTaskName(e.target.value)}
        placeholder="Task Name"
      />
      <input
        type="number"
        value={priority}
        onChange={(e) => setPriority(Number(e.target.value))}
        placeholder="Priority"
      />
      <button onClick={taskId ? handleUpdateTask : handleAddTask}>
        {taskId ? "Update Task" : "Add Task"}
      </button>
    </div>
  );
};

export default TaskForm;
