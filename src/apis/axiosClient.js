import axios from "axios";

const baseURL = {
  comment: "https://tlcn-2022-be.onrender.com/api",
};

const axiosInstance = axios.create({
  headers: { "content-type": "application/json" },
});

axiosInstance.interceptors.request.use(
  (req) => {
    const token = window.localStorage.getItem("accessToken");
    // const ghn_token =
    if (token) {
      req.headers.Authorization = `Bearer ${token}`;
    }
    return req;
  },
  function error() {
    return Promise.reject(error);
  }
);

axiosInstance.interceptors.response.use(
  (res) => {
    return res;
  },
  async (error) => {
    const code = error.response.status;
    const msg = error.response.data?.msg;
    if (code && code === 401) {
      if (msg && msg === "jwt expired") {
        // console.log('this is case expired token case')
        // this is expired token case
        const config = error.response.config;
        //step 1 : retrieve new token from refresh token
        const newAccessToken = await refreshToken();
        if (newAccessToken) {
          config.headers.Authorization = `Bearer ${newAccessToken}`;
          //step 2 : store in local storage
          await window.localStorage.setItem("accessToken", newAccessToken);
          //step 3 : resend the request
          return axiosInstance(config);
        } else {
          return Promise.reject(error);
        }
      }
    }
    return Promise.reject(error);
  }
);
const refreshToken = async () => {
  const refreshToken = window.localStorage.getItem("refreshToken");
  if (!refreshToken) {
    return false;
  }
  const res = await axiosInstance.post(`${baseURL.auth}/auth/refreshToken`, {
    refreshToken,
  });
  const data = res.data;
  const { newAccessToken } = data;
  return newAccessToken;
};

export { axiosInstance, baseURL };
