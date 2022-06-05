import { useCallback, useEffect, useMemo, useReducer } from "react";
import { useNavigate } from "react-router-dom";
import { InfosInterface } from "../interfaces/interface";
import { STATE, infosReducer } from "../utils/util";
import AgreementContainer from "../containers/AgreementContainer";
import UserInfoContainer from "../containers/UserInfosContainer";

const JoinPage = () => {
  const navigate = useNavigate();
  const initialInfos: InfosInterface = {
    name: { value: "", status: STATE.INIT },
    email: { value: "", status: STATE.INIT },
    phoneNumber: { value: "", status: STATE.INIT },
    password: { value: "", status: STATE.INIT },
    friendName: { value: "", status: STATE.INIT },
    term: { value: false, status: STATE.INIT },
    privacyPolicy: { value: false, status: STATE.INIT },
    receiveEmail: { value: false, status: STATE.INIT },
  };
  const [infos, updateInfos] = useReducer(infosReducer, initialInfos);

  const updateValue = useCallback(
    ({ key, value }: { key: string; value: string | boolean }) => {
      const curInfo = infos[key as keyof InfosInterface];
      const newInfo = { ...curInfo, value };
      console.log(newInfo);
      updateInfos({ [key]: newInfo });
    },
    [infos, updateInfos]
  );

  const updateStatus = useCallback(
    ({ key, status }: { key: string; status: symbol }) => {
      const curInfo = infos[key as keyof InfosInterface];
      const newInfo = { ...curInfo, status };
      updateInfos({ [key]: newInfo });
    },
    [infos, updateInfos]
  );

  useEffect(() => {
    console.log(infos);
  }, [infos]);

  const handleSubmit = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    navigate("/confirm"); // case: success
    // case: fail =>
  };

  const isNotOK = (state: symbol) => state !== STATE.OK;

  const submittable = useMemo(() => {
    for (const key in infos) {
      const curStatus = infos[key as keyof InfosInterface].status;
      if (isNotOK(curStatus)) return false;
    }
    return true;
  }, [infos]);

  return (
    <>
      <form>
        <UserInfoContainer
          updateValue={updateValue}
          updateStatus={updateStatus}
        />
        <AgreementContainer
          updateValue={updateValue}
          updateStatus={updateStatus}
        />
        <button disabled={!submittable} type="button" onClick={handleSubmit}>
          {submittable ? "제출하기" : "필수 항목을 모두 채워주세요"}
        </button>
      </form>
    </>
  );
};

export default JoinPage;
