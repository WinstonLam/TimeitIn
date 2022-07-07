import axios from "axios";

const url = "http://localhost:5000/users";

export const getUsers = () => axios.get(url);
export const createUser = (newUser) => axios.post(url, newUser);
export const deleteUser = (userId) => axios.delete(`${url}/${userId}`);
