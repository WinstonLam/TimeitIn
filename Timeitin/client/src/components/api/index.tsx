import axios from "axios";
import { UserCreationFormProps, AdminCreationFormProps } from "../interfaces";
const admin = " http://localhost:5000/settings/admin"
const users = "http://localhost:5000/users";

// Admin related functions
export const createAdmin = (newAdmin: AdminCreationFormProps) => axios.post(admin, newAdmin);
export const fetchAdmin = () => axios.get(admin);


// User related functions
export const getUsers = () => axios.get(users);
export const getUser = (userId: string) => axios.get(`${users}/${userId}`);
export const createUser = (newUser: UserCreationFormProps) => axios.post(users, newUser);
export const updateUser = (userId: string, newUser: UserCreationFormProps) => axios.patch(`${users}/${userId}`, newUser);
export const deleteUser = (userId: string) => axios.delete(`${users}/${userId}`);
