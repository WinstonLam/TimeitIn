import { RgbaColor } from "react-colorful";

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
  onClick?: () => void;
  width?: string;
  height?: string;
}

export interface UserCreationFormProps {
  firstname: string;
  lastname: string;
  color: RgbaColor;
  pincode: string;
  birthdate: Date;
  phonenumber: string;
}

export interface UserCreationFormErros {
  firstname: string;
  lastname: string;
  pincode: string;
  birthdate: string;
  phonenumber: string;
}

export interface DatePickerProps {
  formValues: UserCreationFormProps;
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
