import { useMemo } from "react";
import { useLocation } from "react-router";

const ConfirmPage = () => {
  const location: {} = useLocation();
  const comp = useMemo(() => {
    console.log(location);
    return <>'test'</>;
  }, [location]);

  return <>{comp}</>;
};

export default ConfirmPage;
