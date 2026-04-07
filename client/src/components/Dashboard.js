import React, { useState } from "react";
import TaskCard from "./TaskCard";
import TaskModal from "./TaskModal";
import "../styles/styles.css";

const statuses = ["todo", "in progress", "done"];

export default function Dashboard({ tasks, reload, createTask, updateTask, deleteTask }) {
  const [showModal, setShowModal] = useState(false);

  return (
    <div>
  <button className="add-task-btn" onClick={() => setShowModal(true)}>
  + Add Task
</button>

      <div className="board">
        {statuses.map(status => (
          <div key={status} className="column">
            <h3>{status}</h3>
            {tasks
              .filter(t => t.status === status)
              .map(task => (
                <TaskCard
                  key={task._id}
                  task={task}
                  reload={reload}
                  updateTask={updateTask}
                  deleteTask={deleteTask}
                />
              ))}
          </div>
        ))}
      </div>

      {showModal && (
        <TaskModal
          close={() => setShowModal(false)}
          createTask={createTask}
          reload={reload}
        />
      )}
    </div>
  );
}