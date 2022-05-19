import axios from "axios";

// axios.defaults.baseURL = process.env.DOMAIN_NAME;
// axios.defaults.headers.common["Authorization"] = process.env.NEXT_PUBLIC_API_KEY;

const instance = axios.create({
  baseURL: process.env.DOMAIN_URL,
});

export default instance;
