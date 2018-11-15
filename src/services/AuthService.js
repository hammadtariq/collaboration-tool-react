import axiosInstance from '../utils/AuthInterceptor'

const Api = {

    login: function(payload) {
        return axiosInstance.post('/authn', payload);
    },
    me: function() {
        return axiosInstance.get('/users/me');
    }
};

export default Api;