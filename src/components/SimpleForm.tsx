import React, { createContext, PropsWithChildren, useMemo } from "react";

export const FormContext = createContext({
  setValues: (v: any) => {},
  values: {} as Record<string, any>,
  setErrors: (err: any) => {},
  errors: {} as Record<string, any>,
});

const SimpleForm = ({ children }: PropsWithChildren<{}>) => {
  const [values, setValues] = React.useState({});
  const [errors, setErrors] = React.useState({});
  const value = React.useMemo(
    () => ({ setValues, values, setErrors, errors }),
    [setValues, values, setErrors, errors]
  );
  const hasError = useMemo(() => {
    return Object.values(errors).some((e) => e);
  }, [errors]);

  const onClick = (e: any) => {
    e.preventDefault();
    if (hasError) {
      alert("입력값을 다시 한번 확인해주세요.");
    } else {
      alert(JSON.stringify(values));
    }
  };

  return (
    <FormContext.Provider value={value}>
      <form>
        {children}
        <button type={"submit"} onClick={onClick}>
          제출
        </button>
      </form>
    </FormContext.Provider>
  );
};

export default SimpleForm;
