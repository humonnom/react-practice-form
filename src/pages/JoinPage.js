import { useCallback, useEffect, useMemo, useState } from "react";
import { useHistory, useLocation } from "react-router";
import { useInput } from "../hooks/useInput";
import { useRequest } from "../hooks/useRequest";
import { logo } from "../asset/index";
import { getFieldList, getSelectedFieldData, isOk } from "../utils/util";
import EmailCertModal from "../components/EmailCertModal";
import TermModal from "../components/TermModal";

function JoinPage() {
  const [field, setField] = useState([]);
  const [showPassword, setShowPassword] = useState(false);
  const [agreement, setAgreement] = useState(false);
  const [certModal, setCertModal] = useState(false);
  const [termModal, setTermModal] = useState(false);
  const [certState, setCertState] = useState(false);

  const history = useHistory();
  const location = useLocation();
  const fieldList = getFieldList();

  const { endpoint, joinType, userEmail } = location.state;

  const certificateEmail = () => {
    setCertModal(true);
  };

  const emailCertButton = useMemo(() => {
    if (certState) {
      return (
        <button type='button' css={[InputInnerButton, InputInnerButtonMQ()]}>
          인증완료!
        </button>
      );
    } else {
      return (
        <button
          type='button'
          css={[InputInnerButton, InputInnerButtonMQ()]}
          onClick={certificateEmail}>
          이메일 인증하기
        </button>
      );
    }
  }, [certState]);

  const email = useInput({
    inputType: "email",
    id: "email",
    type: "email",
    label: "이메일",
    disabled: certState,
    overlapCheckRequired: true,
    button: emailCertButton,
  });

  const password = useInput({
    inputType: "password",
    id: "password",
    label: "비밀번호",
    type: showPassword ? "text" : "password",
    button: (
      <button
        type='button'
        css={[InputInnerButton, InputInnerButtonMQ()]}
        onClick={() => setShowPassword(!showPassword)}>
        {showPassword ? "비밀번호 숨기기" : "비밀번호 보기"}
      </button>
    ),
  });

  const name = useInput({
    inputType: "nickname",
    id: "nickname",
    type: "text",
    label: "닉네임",
    overlapCheckRequired: true,
  });

  const url = useInput({
    inputType: "url",
    id: "url",
    type: "text",
    prefix: <p>iamonit.kr/</p>,
    label: "개인 url",
    overlapCheckRequired: true,
  });

  const getPostData = () => {
    if (joinType === "kakao") {
      return {
        email: userEmail,
        nickname: name.value,
        url: url.value,
        field: getSelectedFieldData(field),
      };
    } else {
      return {
        email: email.value,
        password: password.value,
        nickname: name.value,
        url: url.value,
        field: getSelectedFieldData(field),
      };
    }
  };

  const { res, request } = useRequest({
    endpoint,
    method: "post",
    data: getPostData(),
  });

  const onSubmitHandler = (event) => {
    event.preventDefault();
    if (agreement) request();
  };

  const onFieldChange = useCallback(
    (target) => {
      if (field.includes(target)) {
        setField(field.filter((item) => item !== target));
      } else {
        setField(field.concat(target));
      }
    },
    [field]
  );

  useEffect(() => {
    if (res && res.data) {
      if (res.data.code === "ok") {
        history.push("/main");
      } else {
        alert("전송에 실패했습니다. 다시 시도해주세요.");
      }
    }
  }, [res]);

  const isInvalid = useCallback((inputState) => inputState !== "ok", []);

  const disableSubmit = useMemo(() => {
    if (
      (joinType === "local" && isInvalid(password.state)) ||
      (joinType === "local" && isInvalid(email.state)) ||
      isInvalid(url.state) ||
      isInvalid(name.state) ||
      (joinType === "local" && !certState)
    )
      return true;
    else return false;
  }, [email.state, password.state, name.state, url.state, certState]);

  const agreementState = useMemo(() => {
    if (!disableSubmit && !agreement) {
      return "약관에 동의해주세요.";
    }
    return "ok";
  }, [disableSubmit, agreement]);

  const fieldButtons = useMemo(
    () =>
      fieldList.map((item) => (
        <button
          type='button'
          key={item.id}
          css={[FieldButtonStyle, getColorByState(field, item.id)]}
          onClick={() => onFieldChange(item.id)}>
          <p css={FieldButtonLabel}>{item.label}</p>
        </button>
      )),
    [fieldList, field, onFieldChange]
  );

  const emailState = useMemo(() => {
    if (certModal && isOk(email.state) && !email.overlapState) {
      return true;
    }
    return false;
  }, [email.state, certModal]);

  return (
    <div css={[Container, ContainerMQ()]}>
      {certModal && (
        <EmailCertModal
          closeModal={() => setCertModal(false)}
          certSucceed={() => setCertState(true)}
          email={email.value}
          state={emailState}
        />
      )}
      {termModal && (
        <TermModal
          closeModal={() => setTermModal(false)}
          setAgreementTrue={() => {
            setAgreement(true);
          }}
        />
      )}
      <div css={[PageInfos, PageInfosMQ()]}>
        <div css={[PageInfo]}>
          <button
            type='button'
            css={BackButton}
            onClick={() => history.push("/main")}>
            첫화면으로 돌아가기
          </button>
          <span css={[PageGuideMessage, PageTitleMQ(), PageGuideMessageMQ()]}>
            새 계정 생성을 위한 <wbr />
            정보를 입력해
            <wbr />
            주세요.
          </span>
        </div>
        <div>
          <img src={logo} width='110' />
        </div>
      </div>
      <div css={[InputListWrapper, InputListWrapperMQ()]}>
        <form css={[InputList, InputListMQ()]} onSubmit={onSubmitHandler}>
          {joinType === "local" && (
            <div css={[InputItem, InputItemMQ()]}>
              <label css={[InputLabel, InputLabelMQ()]} htmlFor={email.id}>
                이메일
              </label>
              {email.component}
            </div>
          )}
          {joinType === "local" && (
            <div css={[InputItem, InputItemMQ()]}>
              <label css={[InputLabel, InputLabelMQ()]} htmlFor='password'>
                비밀번호
              </label>
              {password.component}
            </div>
          )}
          <div css={[InputItem, InputItemMQ()]}>
            <label css={[InputLabel, InputLabelMQ()]} htmlFor='nickname'>
              닉네임
            </label>
            {name.component}
          </div>
          <div css={[InputItem, InputItemMQ()]}>
            <label css={[InputLabel, InputLabelMQ()]} htmlFor='url'>
              개인 url
            </label>
            {url.component}
          </div>
          <div css={[[InputItem, InputItemMQ()]]} id='field'>
            <label css={[InputLabel, InputLabelMQ()]} htmlFor='field'>
              분야 선택
            </label>
            <div css={FieldContainer}>{fieldButtons}</div>
          </div>
          {field.component}
          <div css={InputConfirm}>
            <div>
              <input
                type='checkbox'
                id='agreement'
                checked={agreement}
                onChange={(event) => {
                  setAgreement(event.target.checked);
                }}
              />
              <label htmlFor='agreement' css={AgreementLabel}>
                <button
                  type='button'
                  css={[InitButtonStyle]}
                  onClick={() => setTermModal(true)}>
                  <p css={[TextUnderline]}>약관</p>
                </button>
                에 동의합니다.
              </label>
              <p>{agreementState === "ok" ? "" : agreementState}</p>
            </div>
            <button
              type='submit'
              css={ConfirmButtonStyle}
              disabled={disableSubmit}>
              생성 완료
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default JoinPage;
