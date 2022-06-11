import { useCallback, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import PasswordContainer from "../containers/PasswordContainer";
import UserInfosContainer from "../containers/UserInfosContainer";
import CheckboxContainer from "../containers/CheckboxContainer";

const JoinPage = () => {
  const navigate = useNavigate();

  // TODO comfirm page로 데이터 보내기
  const handleSubmit = useCallback(
    (event: React.MouseEvent<HTMLButtonElement>) => {
      event.preventDefault();
      navigate("/confirm", {
        state: {
          userInfos: "infos key-value object",
          passwords: "passwords key-value object",
          checks: "checks key-value object",
        },
      });
    },
    []
  );

  const submittable = useMemo(() => {
    return true;
  }, []);

  const submitButtonMessege = useMemo(() => {
    if (submittable) return "최종 제출하기";
    else return "입력을 다시 한번 확인해주세요";
  }, [submittable]);

  return (
    <>
      <form>
        <UserInfosContainer
          setIsOk={() => {
            console.log("userInfo is all ok");
          }}
        />
        <PasswordContainer
          setIsOk={() => {
            console.log("password is all ok");
          }}
        />
        <CheckboxContainer
          setIsOk={() => {
            console.log("checks is all ok");
          }}
        />
        <button disabled={!submittable} type="button" onClick={handleSubmit}>
          {submitButtonMessege}
        </button>
      </form>
    </>
  );
};

export default JoinPage;
