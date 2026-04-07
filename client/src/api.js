const API = "/api/tasks";

export const getTasks = async () => {
  const res = await fetch(API);
  return res.json();
};

export const createTask = async (task) => {
  const res = await fetch(API, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(task)
  });
  return res.json();
};

export const updateTask = async (id, task) => {
  const res = await fetch(`${API}/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(task)
  });
  return res.json();
};

export const deleteTask = async (id) => {
  await fetch(`${API}/${id}`, { method: "DELETE" });
};