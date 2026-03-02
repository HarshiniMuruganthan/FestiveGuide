import api from "./axios";

export const getFestivals = () => api.get("/festivals");
export const createFestival = (data) => api.post("/festivals", data);
export const deleteFestival = (id) => api.delete(`/festivals/${id}`);
