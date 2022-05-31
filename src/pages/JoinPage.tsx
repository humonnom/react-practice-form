import { useReducer } from "react";
import { InfosReducer, STATE } from "../utils/util";
import { Infos } from "../interfaces/interface";
import Terms from "../components/Terms";
import InfosContainer from "../components/InfosContainer";
import { useNavigate } from "react-router-dom";

const JoinPage = () => {
  const navigate = useNavigate();
  const initialState: Infos = {
    name: STATE.EMPTY,
    email: STATE.EMPTY,
    phoneNumber: STATE.EMPTY,
    password: STATE.EMPTY,
    friendName: STATE.EMPTY,
    term: STATE.EMPTY,
  };
  const [inputState, setState] = useReducer(InfosReducer, initialState);

  const handleSubmit = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    console.log("제출");
    // 성공했다고 가정
    navigate("/confirm");
  };

  //inputState: submit시 처리에 사용

  return (
    <>
      <form>
        <InfosContainer />
        <Terms />
        <button type="button" onClick={handleSubmit}>
          submit
        </button>
      </form>
    </>
  );
};

export default JoinPage;
