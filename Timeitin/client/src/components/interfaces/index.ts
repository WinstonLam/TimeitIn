import { RgbaColor } from "react-colorful";
import { ActionTypes as types } from "../../actions/actionTypes";
import { GridColDef } from "@mui/x-data-grid";
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
  phonenumber: string | null;
}

export interface UserCreationFormErros {
  firstname: string;
  lastname: string;
  pincode: string;
  birthdate: string;
  phonenumber: string;
}

export interface UserDataGridProps {
  usericon?: RgbaColor,
  params?: any,
  setUserRowId?: (id: string) => void,
  setShowConfirmationModal?: (show: boolean) => void,
  users?: Array<any>
  RenderColumns?: (setShowConfirmationModal: (show: boolean) => void, setUserRowId: (id: string) => void) => GridColDef[],
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

// __________________________________________________________________________________
// redux actions types
// __________________________________________________________________________________

interface SignInAction {
  type: types.SIGN_IN;
}
interface SignOutAction {
  type: types.SIGN_OUT;
}
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

export type Action =
  | SignInAction
  | SignOutAction
  | CreateUserAction
  | FetchUserAction
  | FetchUsersAction
  | DeleteUserAction
  | UpdateUserAction;


