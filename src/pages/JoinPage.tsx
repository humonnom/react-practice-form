import { useMemo, useReducer } from "react";
import { useNavigate } from "react-router-dom";
import AgreementContainer from "../containers/AgreementContainer";
import InfosContainer from "../containers/InfosContainer";
import { DataManage, StateManage } from "../interfaces/interface";
import { dataReducer, STATE, stateReducer } from "../utils/util";

const JoinPage = () => {
  const navigate = useNavigate();
  const initialData: DataManage = {
    name: "",
    email: "",
    phoneNumber: "",
    password: "",
    friendName: "",
    term: "",
    privacyPolicy: "",
    receiveEmail: "",
  };

  const initialState: StateManage = {
    name: STATE.EMPTY,
    email: STATE.EMPTY,
    phoneNumber: STATE.EMPTY,
    password: STATE.EMPTY,
    friendName: STATE.EMPTY,
    term: STATE.EMPTY,
    privacyPolicy: STATE.EMPTY,
    receiveEmail: STATE.EMPTY,
  };

  const [inputData, updateData] = useReducer(dataReducer, initialData);
  // datas {name: 'jueun park' ...} => use for send data
  const [inputState, updateState] = useReducer(stateReducer, initialState);
  // states {name: STATE.OK ...} => use for validation

  const handleSubmit = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    navigate("/confirm"); // case: success
    // case: fail =>
  };

  const isNotOK = (state: symbol) => state !== STATE.OK;

  const submittable = useMemo(() => {
    for (const key in inputState) {
      if (isNotOK(inputState[key as keyof StateManage])) return false;
    }
    return true;
  }, [inputState]);

  return (
    <>
      <form>
        <InfosContainer />
        <AgreementContainer updateState={updateState} />
        <button disabled={!submittable} type="button" onClick={handleSubmit}>
          {submittable ? "제출하기" : "필수 항목을 모두 채워주세요"}
        </button>
      </form>
    </>
  );
};

export default JoinPage;
