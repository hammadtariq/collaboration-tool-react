import axios from 'axios';

const BASE_URL = 'https://dev-107244-admin.oktapreview.com/api/v1';

// Add a request interceptor
var axiosInstance = axios.create({
    baseURL: `${BASE_URL}`,
    headers: {'Authorization': 'SSWS 00uHVSFz3nMClPMGL-GkuO4pH27lgbDrn2mI6hDvUB'},
    withCredentials: true
});

export default axiosInstance;