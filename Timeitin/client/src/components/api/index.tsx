import axios from "axios";
import { UserCreationFormProps, AdminCreationFormProps } from "../interfaces";
const admin = "/admin";
const users = "/users";
const hours = "/hours";

// Admin related functions
export const createAdmin = (newAdmin: AdminCreationFormProps) => axios.post(admin, newAdmin);
export const fetchAdmin = () => axios.get(admin);

// User related functions
export const getUsers = () => axios.get(users);
export const getUser = (userId: string) => axios.get(`${users}/${userId}`);
export const createUser = (newUser: UserCreationFormProps) => axios.post(users, newUser);
export const updateUser = (userId: string, newUser: UserCreationFormProps) => axios.patch(`${users}/${userId}`, newUser);
export const deleteUser = (userId: string) => axios.delete(`${users}/${userId}`);

// User Hours related functions
export const getYearlyHours = (year: String) => axios.get(`${hours}/${year}`);
export const getMonthlyHours = (year: String, month: String) => axios.get(`${hours}/${year}/${month}`);
export const getDailyHours = (year: String, month: String, day: String) => axios.get(`${hours}/${year}/${month}/${day}`);
export const setStartingTime = (date: any, name: any) =>
    axios.post(`${hours}/${date.year}/${date.month}/${date.day}/${date.startTime}/${name}`
        , date, name);
export const setEndingTime = (date: any, name: any, time: any) =>
    axios.post(`${hours}/${date.year}/${date.month}/${date.day}/${date.startTime}/${name}/${time}`
        , date, time);
