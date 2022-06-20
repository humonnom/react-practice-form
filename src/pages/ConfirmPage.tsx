import { useMemo } from "react";
import { useLocation } from "react-router";

const ConfirmPage = () => {
  const location: {} = useLocation();
  const comp = useMemo(() => {
    return <>'test'</>;
  }, [location]);

  return <>{comp}</>;
};

export default ConfirmPage;
