import useSWR from "swr";
import { useRouter } from "next/router";
import { createContext, useState, useEffect } from "react";

import { SETTINGS } from "../api";

import { transformUrl } from "../libs";

export const Context = createContext({});

const Setting = ({ children }) => {
  const router = useRouter();

  const { data: resData } = useSWR(
    transformUrl(SETTINGS, {
      locale: router.locale,
    })
  );

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
