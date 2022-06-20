import { PropsWithChildren, useEffect } from "react";

const ErrorMessage = ({ children }: PropsWithChildren<{}>) => {
  return (
    <div
      style={{
        height: "15px",
        color: "blue",
        fontSize: "12px",
        marginBottom: "15px",
      }}
    >
      {/* <p>{children}</p> */}
      <p role="error">{children}</p>
    </div>
  );
};
export default ErrorMessage;
