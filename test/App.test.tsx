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
  const { getByText, getByRole } = render(
    <SimpleForm>
      <TextField
        source={source}
        label={labelText}
        validate={[min(minNum), max(maxNum)]}
      />
    </SimpleForm>
  );
  return {
    label: getByText(labelText),
    input: getByRole("textbox"),
    button: getByRole("button"),
  };
};

test("check there is input and label [TextField]", () => {
  const { label, input } = setup("name", "이름", 5, 10);

  expect(label).toBeInTheDocument();
  expect(input).toBeInTheDocument();
});

const setLengthErrorTest = (minNum: number, maxNum: number) => {
  return async (value: string) => {
    const { input, button } = setup("name", "이름", minNum, maxNum);
    await userEvent.type(input, value);

    if (min(minNum)(value) || max(maxNum)(value)) {
      // /* with error */
      expect(button).toBeDisabled();
    } else {
      /* without error */
      expect(button).toBeEnabled();
    }
  };
};

test("check error [min, max]", () => {
  const test = setLengthErrorTest(5, 10);
  ["abc", "asdfasdfasdf", "asdfasdf", "asdfasdfasdfasdfasdf", "dfdf"].forEach(
    (s: string) => {
      test(s);
      cleanup();
    }
  );
});
