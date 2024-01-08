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
    })
    .catch((rej) => {
      switch (rej.response.status) {
        case 400:
          switch (rej.response.data["message"]) {
            case "비밀번호가 비어있습니다.":
              alert("비밀번호를 입력하세요");
            case "이메일이 비어있습니다.":
              alert("이메일을 입력하세요");
          }
        case 403:
          alert("이메일 인증하세요");
        case 404:
          alert("계정을 찾지 못했습니다");
      }
    });
};

export default login;
