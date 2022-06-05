import { TYPE } from "../utils/util";

const StateMessage = ({ type, value, update }: any) => {
  const validator = () => {
    if (type === TYPE.NAME) {
    }
  };

  const stateMessage = "상태 메세지";
  console.log(stateMessage);
  // should update data & state

  return (
    <>
      <p>{""}</p>
    </>
  );
};

export default StateMessage;
