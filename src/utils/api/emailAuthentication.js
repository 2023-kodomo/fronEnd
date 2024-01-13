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
      switch (rej.response.data["message"]) {
        case "이메일 형식이 올바르지 않습니다.":
          alert("이메일을 다시 작성해 주세요 (@dsm.hs.kr)");
          break;
        case "유저가 이미 존재합니다.":
          alert("이미 존재하는 이메일입니다");
          window.location.href = "/login";
          break;
        default:
          console.log("true를 return합니다");
          return true;
      }
      console.log("false를 return합니다");
      return false;
    });
};

export default emailAuthentications;
