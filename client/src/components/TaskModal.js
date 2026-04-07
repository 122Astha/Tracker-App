import React, { useState } from "react";
import "./TaskModal.css";

export default function TaskModal({ close, createTask, reload }) {
  const [form, setForm] = useState({
    title: "",
    description: ""
  });

  const submit = async () => {
    await createTask(form);
    reload();
    close();
  };

  return (
    <div className="modal">
      <div className="modal-content">
        <h3>Create Task</h3>

        <input
          placeholder="Title"
          onChange={e => setForm({ ...form, title: e.target.value })}
        />

        <textarea
          placeholder="Description"
          onChange={e => setForm({ ...form, description: e.target.value })}
        />

        <button onClick={submit}>Save</button>
        <button onClick={close}>Cancel</button>
      </div>
    </div>
  );
}