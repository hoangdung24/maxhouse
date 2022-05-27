import { useContext } from "react";

import { SettingContext } from "../contexts";

const useSetting = () => {
  const context = useContext(SettingContext);
  // console.log("context", context);
  return context;
};

export default useSetting;
