import axios from "axios";
import Cookies from "universal-cookie";
import { TOKEN, USER } from "../utils/Constant";

// const BASE_URL = 'https://dev-107244-admin.oktapreview.com/api/v1';
const BASE_URL = "http://localhost:3333";

var cookies = new Cookies();
// Add a request interceptor
var axiosInstance = axios.create({
  baseURL: `${BASE_URL}`
});

// Add a request interceptor
axiosInstance.interceptors.request.use(
  function(config) {
    var token = cookies.get(TOKEN);
    if (token) {
      if (config.method !== "OPTIONS") {
        config.headers.authorization = token;
      }
    }
    return config;
  },
  function(error) {
    return Promise.reject(error);
  }
);

// Add a response interceptor
axiosInstance.interceptors.response.use(
  function(response) {
    // Do something with response data
    return response;
  },
  function(error) {
    if (error.response) {
      if (error.response.status === 401 || error.response.status === 403) {
        cookies.remove(TOKEN);
        cookies.remove(USER);
      }
    }

    // Do something with response error
    return Promise.reject(error);
  }
);
export default axiosInstance;
