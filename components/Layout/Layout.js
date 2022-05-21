import { Fragment } from "react";
import Header from "../Header/Header";
import { Footer } from "../../components";

// import { SettingConfig, GlobalConfig } from "../../contexts";

const Layout = ({ children }) => {
  return (
    <Fragment>
      <Header />
      {children}
      <Footer />
    </Fragment>
  );
};

export default Layout;
