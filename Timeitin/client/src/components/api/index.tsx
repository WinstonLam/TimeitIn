import axios from "axios";
import { UserCreationFormProps } from "../interfaces";
const url = "http://localhost:5000/users";

export const getUsers = () => axios.get(url);
export const getUser = (userId: string) => axios.get(`${url}/${userId}`);
export const createUser = (newUser: UserCreationFormProps) =>
  axios.post(url, newUser);
export const deleteUser = (userId: string) => axios.delete(`${url}/${userId}`);
