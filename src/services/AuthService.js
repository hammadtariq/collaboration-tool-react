import axiosInstance from "../utils/AuthInterceptor";

const Api = {
  login: function(data) {
    return axiosInstance.post("/login", {
      userName: "user",
      password: "secret"
    });
  },
  loginToOkta: function(payload) {
    return axiosInstance.post(
      `/okta/user/auth?userName=${payload.userName}&password=${
        payload.password
      }`
    );
  },
  me: function() {
    return axiosInstance.get("/okta/users/me");
  }
};

export default Api;
