import { HTMLInputTypeAttribute } from "react";

export interface InputProps {
  source: string;
  label: string;
  placeholder?: string;
  type?: HTMLInputTypeAttribute;
  validate?: any[];
}
export interface SelectProps {
  source: string;
  label: string;
  option: { key: string; value: string }[];
  validate?: any[];
}
