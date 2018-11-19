import axios from 'axios';

// const BASE_URL = 'https://dev-107244-admin.oktapreview.com/api/v1';
const BASE_URL = 'http://localhost:3333';

// Add a request interceptor
var axiosInstance = axios.create({
    baseURL: `${BASE_URL}`
});

export default axiosInstance;