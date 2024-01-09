import axios from "axios";

const baseURL = process.env.REACT_APP_BASE_URL;

const register = async (email, name, password) => {
  return await axios
    .post(`${baseURL}/auth/signup`, {
      email: email,
      name: name,
      password: password,
    })
    .then(() => {
      window.location.href = "/login";
    })
    .catch((rej) => {
      console.log(rej.response);
      switch (rej.response.data["message"]) {
        case "유저가 이미 존재합니다.":
          alert("이미 존재하는 유저입니다");
          break;
          case "인증이 되지 않은 메일입니다.":
          alert("인증이 되지 않은 메일입니다");
          break;
        case "이름 형식이 올바르지 않습니다.":
          alert("최소 2글자로 입력해주세요");
          break;
        case "이메일 형식이 올바르지 않습니다.":
          alert("학교 이메일로 진행해주세요");
          break;
        case "비밀번호 형식이 올바르지 않습니다.":
          alert("8 ~ 20 글자 알파벳 1개 이상 + 숫자 조합");
          break;
      }
    });
};

export default register;
