import React, { createContext, PropsWithChildren } from "react";

export const FormContext = createContext({
  setValues: (v: any) => {},
  values: {} as Record<string, any>,
  setError: (arg: boolean) => {},
  error: false,
});

const SimpleForm = ({ children }: PropsWithChildren<{}>) => {
  const [values, setValues] = React.useState({});
  const [error, setError] = React.useState(false);
  const value = React.useMemo(
    () => ({ setValues, values, setError, error }),
    [setValues, values]
  );

  const onClick = (e: any) => {
    e.preventDefault();
    alert(JSON.stringify(values));
  };

  return (
    <FormContext.Provider value={value}>
      <form>
        {children}
        <button type={"submit"} onClick={onClick} disabled={error}>
          제출
        </button>
      </form>
    </FormContext.Provider>
  );
};

export default SimpleForm;
