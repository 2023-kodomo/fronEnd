import axios from "axios";

const baseURL = process.env.REACT_APP_BASE_URL;

const register = async (email, name, password) => {
  return await axios
    .post(`${baseURL}/auth/signup`, {
      email: email,
      name: name,
      password: password,
    })
    .catch((rej) => {
      switch (rej.response.data["message"]) {
        case "이메일 형식이 올바르지 않습니다.":
          alert("학교 이메일로 진행해주세요");
        case "이름 형식이 올바르지 않습니다.":
          alert("최소 2글자로 입력해주세요");
        case "비밀번호 형식이 올바르지 않습니다.":
          alert("8 ~ 20 글자 알파벳 1개 이상 + 숫자 조합");
        case "유저가 이미 존재합니다.":
          alert("유저가 이미 존재합니다.");
      }
    });
};

export default register;
