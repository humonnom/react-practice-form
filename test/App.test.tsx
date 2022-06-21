/**
 * @jest-environment jsdom
 */
import React from "react";
import { render, cleanup } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import SimpleForm from "../src/components/SimpleForm";
import TextField from "../src/components/TextField";
import { min, max } from "../src/utils/validationUtil";

/**
 * TextField, SimpleForm testing
 */
const setup = (
  source: string,
  labelText: string,
  minNum: number,
  maxNum: number
) => {
  const container = render(
    <SimpleForm>
      <TextField
        source={source}
        label={labelText}
        validate={[min(minNum), max(maxNum)]}
      />
    </SimpleForm>
  );
  return {
    container,
    label: container.getByText(labelText),
    input: container.getByRole("textbox"),
    button: container.getByRole("button"),
  };
};

test("check there is input and label [TextField]", () => {
  try {
    const { label, input } = setup("name", "이름", 5, 10);
    expect(label).toBeInTheDocument();
    expect(input).toBeInTheDocument();
  } catch (error) {
    console.error(error);
  }
});

const setLengthErrorTest = (minNum: number, maxNum: number) => {
  return async (value: string) => {
    const { input, button } = setup("name", "이름", minNum, maxNum);
    await userEvent.type(input, value);
    if (min(minNum)(value) || max(maxNum)(value)) {
      /* validation fail */
      expect(button).toBeDisabled();
    } else {
      /* validation success */
      expect(button).toBeEnabled();
    }
  };
};

test("check error message [min, max]", () => {
  try {
    const test = setLengthErrorTest(5, 10);
    ["abc", "asdfasdfasdf", "asdfasdf", "asdfasdfasdfasdfasdf", "dfdf"].forEach(
      (s: string) => {
        test(s);
        cleanup();
      }
    );
  } catch (error) {
    console.error(error);
  }
});
