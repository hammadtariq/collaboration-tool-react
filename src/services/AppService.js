import axiosInstance from '../utils/AuthInterceptor'

const Api = {

    login: function() {
        return axiosInstance.post('/apps?filter=user.id+eq+"00uhgv9ngdOt9bJIm0h7"');
    }
};

export default Api;