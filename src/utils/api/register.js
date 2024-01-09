import axios from "axios";

const baseURL = process.env.REACT_APP_BASE_URL;
const url = "/Email";
const mailName = "메일 인증";
const option =
  "width = 700, height = 700, top = 100, left = 200, location = yes, toolbars = yes, status = yes";

const register = async (email, name, password) => {
  return await axios
    .post(`${baseURL}/auth/signup`, {
      email: email,
      name: name,
      password: password,
    })
    .then(() => {
      alert("메일 인증을 해주세요");
      window.open(url, mailName, option);
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
