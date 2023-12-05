import axios from "axios";

const baseURL = process.env.REACT_APP_BASE_URL;

const emailAuth = async (authCode) => {
  return await axios
    .post(`${baseURL}/email/verify/${authCode}`, {
      email: `${localStorage.getItem("email")}`,
    })
    .then((res) => {
      return res;
    })
    .catch(({ response }) => {
      console.log(response);
      if (response.status === 403) {
        return response.data;
      }
    });
};

export default emailAuth;
