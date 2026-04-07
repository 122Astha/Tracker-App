import React, { useEffect, useState } from "react";
import { getTasks, createTask, updateTask, deleteTask } from "./api";
import Dashboard from "./components/Dashboard";

function App() {
  const [tasks, setTasks] = useState([]);

  const loadTasks = async () => {
    const data = await getTasks();
    setTasks(data);
  };

  useEffect(() => {
    loadTasks();
  }, []);

  return (
    <div>
      <h1 style={{ textAlign: "center" }}>Process Tracker</h1>
      <Dashboard
        tasks={tasks}
        reload={loadTasks}
        createTask={createTask}
        updateTask={updateTask}
        deleteTask={deleteTask}
      />
    </div>
  );
}

export default App;