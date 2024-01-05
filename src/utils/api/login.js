import axios from "axios";

const baseURL = process.env.REACT_APP_BASE_URL;

const login = async (email, password) => {
  return await axios
    .post(`${baseURL}/auth/login`, {
      email: email,
      password: password,
    })
    .then((response) => {
      const accessToken = response.data.accessToken;
      const refreshToken = response.data.refreshToken;

      localStorage.setItem("accessToken", accessToken);
      localStorage.setItem("refreshToken", refreshToken);
      return;
    });
};

export default login;
