import axios from "axios";

// used https://mockapi.io/ to create a fake REST API for deployment
const api = axios.create({
  baseURL: "https://69d5f0971c120e733ccd52e5.mockapi.io/",
});

export const getTasks = async () => {
  const { data } = await api.get("/task");
  return data;
};

export const createTask = async (task) => {
  const { data } = await api.post("/task", task);
  return data;
};

export const updateTask = async ({ id, ...updates }) => {
  const { data } = await api.put(`/task/${id}`, updates);
  return data;
};

export const deleteTask = async (id) => {
  const { data } = await api.delete(`/task/${id}`);
  return data;
};

export default api;
