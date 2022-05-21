import { Fragment } from "react";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";

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
