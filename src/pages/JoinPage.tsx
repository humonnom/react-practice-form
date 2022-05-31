import { useEffect, useReducer } from "react";
import { InfosReducer } from "../utils/util";
import { Infos } from "../interfaces/interface";
import Terms from "../components/Terms";
import InfosContainer from "../components/InfosContainer";
import { useNavigate } from "react-router-dom";

const JoinPage = (params: any) => {
  const initialValue: Infos = {
    name: "",
    email: "",
    phoneNumber: "",
    password: "",
    friendName: "",
    term: "",
  };
  const navigate = useNavigate();
  const [infos, setInfos] = useReducer(InfosReducer, initialValue);
  const handleSubmit = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    console.log("제출");
    // 성공했다고 가정
    navigate("/confirm");
  };

  useEffect(() => {
    console.log(infos);
  }, [infos]);

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
