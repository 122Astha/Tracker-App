import React, { useState } from "react"; // ✅ make sure useState is imported
import "../styles/styles.css";

export default function TaskModal({ close, createTask, reload }) {
  const [form, setForm] = useState({ title: "", description: "" });

  const submit = async () => {
    await createTask(form);
    reload();
    close();
  };

  return (
    <div className="modal show" onClick={close}>
      <div className="modal-content" onClick={e => e.stopPropagation()}>
        <h3>Create Task</h3>

        <input
          placeholder="Title"
          value={form.title}
          onChange={e => setForm({ ...form, title: e.target.value })}
        />

        <textarea
          placeholder="Description"
          value={form.description}
          onChange={e => setForm({ ...form, description: e.target.value })}
        />

        <button onClick={submit}>Save</button>
        <button onClick={close}>Cancel</button>
      </div>
    </div>
  );
}