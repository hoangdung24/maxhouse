import { API_KEY, CONTACTS, PREFIX } from "../api";
import axios from "../axios.config";
import transformUrl from "./transformUrl";

export default (props) => {
  return axios
    .post(`${process.env.NEXT_PUBLIC_DOMAIN_URL}${CONTACTS}/`, props, {
      headers: {
        Authorization: "Api-Key emSrWReh.sdhbfPz0W1eNksmfw6sOddzclP183ZCv",
      },
    })
    .then((res) => console.log("Đăng ký thành công"));
};
