import React, { createContext, PropsWithChildren, useEffect } from "react";

export const FormContext = createContext({
  setValues: (v: any) => {},
  values: {} as Record<string, any>,
  setSubmittable: (arg: boolean) => {},
});

const SimpleForm = ({ children }: PropsWithChildren<{}>) => {
  const [values, setValues] = React.useState({});
  const [submittable, setSubmittable] = React.useState(false);
  const value = React.useMemo(
    () => ({ setValues, values, setSubmittable }),
    [setValues, values]
  );

  useEffect(() => {
    console.log(submittable);
  }, [submittable]);

  const onClick = (e: any) => {
    e.preventDefault();
    if (submittable) {
      alert(JSON.stringify(values));
    } else {
      alert("입력값을 확인해주세요.");
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
