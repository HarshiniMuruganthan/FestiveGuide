import api from "./axios";

export const bookTicket = (data) => api.post("/bookings/book", data);
