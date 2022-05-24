import { API_KEY, CONTACTS } from "../api";
import axios from "../axios.config";
import transformUrl from "./transformUrl";

export default (props) => {
  const urls = [transformUrl(CONTACTS)];
  //   console.log("urls", `https://maxhouse.t-solution.vn${urls}`);
  return axios
    .post(`https://maxhouse.t-solution.vn${urls}`, props, {
      headers: {
        Authorization: API_KEY,
      },
    })
    .then((res) => console.log("Đăng ký thành công"));
};
