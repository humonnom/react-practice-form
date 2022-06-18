import CheckboxField from "../components/CheckboxField";
import SelectboxField from "../components/SelectboxField";
import SimpleForm from "../components/SimpleForm";
import TextField from "../components/TextField";
import { min, max, required } from "../utils/validationUtil";

function UserInfoForm(): JSX.Element {
  return (
    <SimpleForm>
      <TextField
        source={"name"}
        label={"이름(필수)"}
        validate={[min(5), max(10)]}
      />
      <TextField
        type="password"
        source={"password"}
        label={"비밀번호(필수)"}
        validate={[min(5), max(10)]}
      />
      <CheckboxField
        source={"term-check"}
        label={"약관동의(필수)"}
        validate={[required]}
      />
      <CheckboxField source={"email-receive-check"} label={"메일수신동의"} />
      <SelectboxField
        source={"area"}
        label={"거주지역(필수)"}
        option={[
          { key: "", value: "=== choose ===" },
          { key: "seoul", value: "서울시" },
          { key: "gyeonggi", value: "경기도" },
        ]}
        validate={[required]}
      />
    </SimpleForm>
  );
}

export default UserInfoForm;
