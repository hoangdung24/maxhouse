import { useContext } from "react";

import { GlobalContext } from "../contexts";

const useGlobal = () => {
  const context = useContext(GlobalContext);

  return context;
};

export default useGlobal;
