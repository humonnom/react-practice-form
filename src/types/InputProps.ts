import { HTMLInputTypeAttribute } from "react";

export interface InputProps {
  source: string;
  label: string;
  placeholder?: string;
  type?: HTMLInputTypeAttribute;
  validate?: { (source: string): string }[];
}
export interface SelectProps
  extends Pick<InputProps, "source" | "validate" | "label"> {
  option: { key: string; value: string }[];
}
