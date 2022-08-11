import { RgbaColor } from "react-colorful";
import { ActionTypes as types } from "../../actions/actionTypes";
import { GridColDef } from "@mui/x-data-grid";

// __________________________________________________________________________________
// Admin actions types
// __________________________________________________________________________________

export interface AdminCreationFormProps {
  pincode: string[] | null;
  createdAt?: Date | null;
  __v?: number | null;
  _id?: string | null;
}

// __________________________________________________________________________________
// User actions types
// __________________________________________________________________________________

export interface BasicArrays {
  pages: Array<string>;
  links: Array<string>;
}

export interface ButtonProps {
  text: string;
  textColor?: string;
  bgColor?: string;
  bdColor?: string;
  link?: string;
  onClick?: (e: any | null) => void;
  width?: string;
  height?: string;
  type?: "button" | "submit" | "reset";
}

export interface UserCreationFormProps {
  firstname: string | null;
  lastname: string | null;
  color: RgbaColor;
  pincode: string | null;
  birthdate: Date | null;
  function: string | null;
  phonenumber: string | null;
  createdAt?: Date | null;
  __v?: number | null;
  _id?: string | null;
}

export interface UserCreationFormErros {
  firstnameError: string | null;
  lastnameError: string | null;
  pincodeError: string | null;
  birthdateError: string | null;
  functionError: string | null;
  phonenumberError: string | null;
}

export interface UserDataGridProps {
  color?: RgbaColor;
  params?: any;
  setUserRowId?: (id: string) => void;
  setShowConfirmationModal?: (show: boolean) => void;
  users?: Array<any>;
  RenderColumns?: (
    setShowConfirmationModal: (show: boolean) => void,
    setUserRowId: (id: string) => void
  ) => GridColDef[];
}
export interface DatePickerProps {
  birthdate: Date | null;
  errors: UserCreationFormErros;
  handleDateChange: (e: Date) => void;
  minDate: number;
  maxDate: number;
}

export interface ColorPickerProps {
  selectedColor: RgbaColor;
  handleColorPicker: (e: RgbaColor) => void;
  color?: string;
}

export interface UserScreenWidgetsProps {
  time?: string | null;
  date?: string | null;
}
// __________________________________________________________________________________
// redux actions types
// __________________________________________________________________________________

// AUTHENTICATION ACTIONS TYPES
// __________________________________________________________________________________

interface SignInAction {
  type: types.SIGN_IN;
  payload: string;
}
interface SignOutAction {
  type: types.SIGN_OUT;
}

// USER ACTIONS TYPES
// __________________________________________________________________________________
interface SetUserAction {
  type: types.SET_USER;
  payload: UserCreationFormProps;
}
interface UnsetUserAction {
  type: types.UNSET_USER;
}

// USERS ACTIONS TYPES
// __________________________________________________________________________________

interface CreateUserAction {
  type: types.CREATE_USER;
  payload: UserCreationFormProps;
}
interface FetchUserAction {
  type: types.FETCH_USER;
  payload: UserCreationFormProps;
}
interface FetchUsersAction {
  type: types.FETCH_USERS;
  payload: UserCreationFormProps[];
}
interface DeleteUserAction {
  type: types.DELETE_USER;
  payload: string;
}
interface UpdateUserAction {
  type: types.EDIT_USER;
  payload: UserCreationFormProps;
}

// ADMIN ACTIONS TYPES
// __________________________________________________________________________________

interface CreateAdminAction {
  type: types.CREATE_ADMIN;
  payload: AdminCreationFormProps;
}
interface FetchAdminAction {
  type: types.FETCH_ADMIN;
  payload: AdminCreationFormProps;
}

interface DeleteAdminAction {
  type: types.DELETE_ADMIN;
  payload: string;
}
interface UpdateAdminAction {
  type: types.EDIT_ADMIN;
  payload: AdminCreationFormProps;
}

// HOURS ACTIONS TYPES
// __________________________________________________________________________________
interface FetchYearlyHoursAction {
  type: types.FETCH_YEARLY_HOURS;
  payload: [{}];
}
interface FetchMonthlyHoursAction {
  type: types.FETCH_MONTHLY_HOURS;
  payload: [{}];
}
interface FetchDailyHoursAction {
  type: types.FETCH_DAILY_HOURS;
  payload: [{}];
}

interface SetStartingTime {
  type: types.SET_STARTING_TIME;
  payload: {};
}

export type Action =
  | SetUserAction
  | UnsetUserAction
  | SignInAction
  | SignOutAction
  | CreateUserAction
  | FetchUserAction
  | FetchUsersAction
  | DeleteUserAction
  | UpdateUserAction
  | CreateAdminAction
  | FetchAdminAction
  | DeleteAdminAction
  | UpdateAdminAction
  | FetchYearlyHoursAction
  | FetchMonthlyHoursAction
  | FetchDailyHoursAction
  | SetStartingTime;
