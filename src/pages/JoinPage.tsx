import UserInfoForm from "../containers/UserInfoForm";
import { ErrorBoundary } from "../components/ErrorBoundary";

const JoinPage = () => {
  return (
    <ErrorBoundary>
      <UserInfoForm />
    </ErrorBoundary>
  );
};

export default JoinPage;
