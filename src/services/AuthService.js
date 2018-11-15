import axiosInstance from '../utils/AuthInterceptor'

const Api = {

    login: function(payload) {
        return axiosInstance.post('/authn', payload);
    }
};

export default Api;