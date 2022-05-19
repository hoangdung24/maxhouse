import { Container } from "@mui/material";
import { Fragment } from "react";
import NavBars from "../Header/Nav";

// import { SettingConfig, GlobalConfig } from "../../contexts";

const Layout = ({ children }) => {
  return (
    <Fragment>
      <NavBars>{children}</NavBars>
    </Fragment>
  );
};

export default Layout;
