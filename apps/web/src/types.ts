import { InputHTMLAttributes} from "react";
import { FieldValues, UseFormRegister } from "react-hook-form";


export interface ButtonProps {
  name: string;
  type: "default" | "secondary" | "ghost";
  size: "large" | "medium" | "small";
}

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  title: string;
  id: string;
  name: any;
  register: UseFormRegister<FieldValues>;
}
