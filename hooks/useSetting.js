import { useContext } from "react";

import { SettingContext } from "../contexts";

const useSetting = () => {
  const context = useContext(SettingContext);

  return context;
};

export default useSetting;
