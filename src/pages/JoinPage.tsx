import UserInfoForm from "../containers/UserInfoForm";
import { ErrorBoundary } from "../components/ErrorBoundary";

export type Data = { isAllOk: boolean; allValues: any };

const JoinPage = () => {
  return (
    <ErrorBoundary>
      <UserInfoForm />
    </ErrorBoundary>
  );
};

export default JoinPage;
