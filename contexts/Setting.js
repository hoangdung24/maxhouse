import useSWR from "swr";
import { createContext, useState, useEffect } from "react";

import { SETTINGS } from "../api";

export const Context = createContext({});

const Setting = ({ children }) => {
  const { data: resData } = useSWR(SETTINGS);

  const [contextValue, setContextValue] = useState(() => {
    if (resData) {
      return resData;
    } else {
      return undefined;
    }
  });

  useEffect(() => {
    if (resData) {
      setContextValue(resData);
    }
  }, [resData]);

  return <Context.Provider value={contextValue}>{children}</Context.Provider>;
};

export default Setting;
