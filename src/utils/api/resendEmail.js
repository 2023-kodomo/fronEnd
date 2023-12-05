import axios from "axios";

const baseURL = process.env.REACT_APP_BASE_URL;

const resendEmail = () => {
  axios
    .post(`${baseURL}/email/reissue`, {
      email: `${localStorage.getItem("email")}`,
    })
    .catch((res) => {
      console.log(res);
    });
};

export default resendEmail;
