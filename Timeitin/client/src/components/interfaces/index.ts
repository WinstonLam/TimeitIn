export interface BasicArrays {
  pages: Array<string>;
  links: Array<string>;
}

export interface ButtonProps {
  text: string;
  textColor: string;
  bgColor: string;
  bdColor: string;
  link: string;
  onClick?: () => void;
  width?: string;
  height?: string;
}

export interface UserCreationFormProps {
  firstname: string;
  lastname: string;
  color: string;
  pincode: string;
  birthdate: string;
  phonenumber: string;
}

export interface UserCreationFormErros {
  firstname: string;
  lastname: string;
  color: string;
  pincode: string;
  birthdate: string;
  phonenumber: string;
}

export interface DatePickerProps {
  formValues: UserCreationFormProps;
  errors: UserCreationFormErros;
  handleDateChange: (e: any) => void;
  minDate: number;
  maxDate: number;
}
