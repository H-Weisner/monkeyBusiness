import axios from "axios";

const monkeyApi = axios.create({
  baseURL: "https://dev-cloud.cc/api/",
});

export default monkeyApi;