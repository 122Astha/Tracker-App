import React from "react";
import "./TaskCard.css";

export default function TaskCard({ task, updateTask, deleteTask, reload }) {
  const move = async () => {
    const next =
      task.status === "todo"
        ? "in progress"
        : task.status === "in progress"
        ? "done"
        : "todo";

    await updateTask(task._id, { ...task, status: next });
    reload();
  };

  return (
    <div className="card">
      <h4>{task.title}</h4>
      <p>{task.description}</p>

      <button onClick={move}>Move</button>
      <button onClick={() => deleteTask(task._id).then(reload)}>Delete</button>
    </div>
  );
}