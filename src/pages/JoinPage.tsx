import { useEffect, useMemo, useReducer } from "react";
import { useInput } from "../hooks/useInput";
import { InfosReducer, TYPE } from "../utils/util";
import { Infos } from "../interfaces/interface";
import StateMessage from "../components/StateMessage";

const JoinPage = (params: any) => {
  const initialValue: Infos = {
    name: "",
    number: "",
  };
  const [infos, setInfos] = useReducer(InfosReducer, initialValue);

  const { value: userNameValue, comp: userNameComp } = useInput({
    typeInApp: TYPE.NAME,
    id: "name",
    type: "text",
    label: "유저네임",
  });

  // const submitHandler = (event: React.MouseEvent<HTMLButtonElement>) => {
  //   event.preventDefault();
  // };

  // useEffect(() => {
  //   console.log("userNameValue");
  //   console.log(userNameValue);
  // }, [userNameValue]);

  useEffect(() => {
    console.log(infos);
  }, [infos]);

  return (
    <>
      {userNameComp}
      <StateMessage type={TYPE.NAME} value={userNameComp} />
    </>
  );
};

export default JoinPage;
