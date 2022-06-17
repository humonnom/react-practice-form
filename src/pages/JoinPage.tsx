import { useCallback, useMemo, useReducer } from "react";
import { useNavigate } from "react-router-dom";
import PasswordContainer from "../containers/PasswordForm";
import UserInfoForm from "../containers/UserInfoForm";
import CheckboxContainer from "../containers/CheckboxForm";
import { reducer } from "../utils/util";

export type Data = { isAllOk: boolean; allValues: any };

const JoinPage = () => {
  const navigate = useNavigate();
  const [datas, updateDatas] = useReducer(reducer, {
    userInfos: { isAllOk: false, allValues: {} },
    passwords: { isAllOk: false, allValues: {} },
    checks: { isAllOk: false, allValues: {} },
  });

  const updateData = useCallback(
    (key: string, newData: Data) => {
      updateDatas({ ...datas, [key]: newData });
    },
    [datas, updateDatas]
  );

  // TODO comfirm page로 데이터 보내기
  // state는 제외하고 values만 보내기
  // key-value쌍으로 송신하도록 평탄화 필요
  const handleSubmit = useCallback(
    (event: React.MouseEvent<HTMLButtonElement>) => {
      event.preventDefault();
      navigate("/confirm", {
        state: datas,
      });
    },
    [datas]
  );

  const submittable = useMemo(() => {
    // datas의 각 data의 isAllOk가 모두 true면 data 송신 가능
    return true;
  }, []);

  const submitButtonMessege = useMemo(() => {
    if (submittable) return "최종 제출하기";
    else return "입력을 다시 한번 확인해주세요";
  }, [submittable]);

  return (
    <>
      {/*<form>*/}
      <UserInfoForm />
      {/*  <PasswordContainer*/}
      {/*    update={(newData: Data) => updateData("passwords", newData)}*/}
      {/*  />*/}
      {/*  <CheckboxContainer*/}
      {/*    update={(newData: Data) => updateData("checks", newData)}*/}
      {/*  />*/}
      {/*  <button disabled={!submittable} type="button" onClick={handleSubmit}>*/}
      {/*    {submitButtonMessege}*/}
      {/*  </button>*/}
      {/*</form>*/}
    </>
  );
};

export default JoinPage;
