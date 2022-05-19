import useSWR from "swr";
import { createContext } from "react";

import { SETTINGS } from "../api";

export const Context = createContext({});

const Setting = ({ children }) => {
  const { data } = useSWR(SETTINGS);

  return <Context.Provider value={{ ...data }}>{children}</Context.Provider>;
};

export default Setting;
