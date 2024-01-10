import axios from "axios";

const baseURL = process.env.REACT_APP_BASE_URL;

const emailAuthentications = async (email) => {
  return await axios
    .post(`${baseURL}/auth/signup`, {
      email: email,
    })
    .then(() => {
      return true;
    })
    .catch((rej) => {
      console.log(rej.response.data["message"]);
      if (rej.response.data["message"] === "이메일 형식이 올바르지 않습니다.") {
        return false;
      }
    });
};

export default emailAuthentications;
