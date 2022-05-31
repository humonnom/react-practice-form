import { TYPE } from "../utils/util";

const StateMessage = ({ type, value }: any) => {
  // validation
  const validator = () => {
    if (type === TYPE.NAME) {
      return console.log("name");
    }
    return null;
  };
  const stateMessage = validator ? validator() : "";
  return (
    <>
      <p>{stateMessage || ""}</p>
    </>
  );
};

export default StateMessage;
