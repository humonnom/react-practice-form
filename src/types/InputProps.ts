import { HTMLInputTypeAttribute } from "react";

export interface InputProps {
  source: string;
  label: string;
  placeholder?: string;
  type?: HTMLInputTypeAttribute;
  validate?: { (source: any): string }[];
}
export interface SelectProps
  extends Pick<InputProps, "source" | "validate" | "label"> {
  option: { value: string; optionLabel: string }[];
}
