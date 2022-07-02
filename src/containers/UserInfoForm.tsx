import CheckboxField from "../components/CheckboxField";
import SelectboxField from "../components/SelectboxField";
import SimpleForm from "../components/SimpleForm";
import TextField from "../components/TextField";
import { min, max } from "../utils/validationUtil";

function UserInfoForm(): JSX.Element {
  return (
    <SimpleForm>
      <TextField source={"name"} label={"이름"} validate={[min(5), max(10)]} />
      <TextField
        type="password"
        source={"password"}
        label={"비밀번호"}
        validate={[min(5), max(10)]}
      />
      <CheckboxField source={"term-check"} label={"약관동의"} />
      <CheckboxField source={"email-receive-check"} label={"메일수신동의"} />
      <SelectboxField
        source={"area"}
        label={"거주지역"}
        options={[
          { value: "", optionLabel: "=== choose ===" },
          { value: "seoul", optionLabel: "서울시" },
          { value: "gyeonggi", optionLabel: "경기도" },
        ]}
      />
    </SimpleForm>
  );
}

export default UserInfoForm;
