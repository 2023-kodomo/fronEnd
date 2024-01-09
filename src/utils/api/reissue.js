import axios from "axios";

const baseURL = process.env.REACT_APP_BASE_URL;

const reissue = async () => {
  if (!localStorage.getItem("refreshToken")) {
    alert("로그인이 필요한 기능입니다");
    window.location.href = "/login";
  }
  return await axios
    .post(`${baseURL}/auth/reissue`, {
      refreshToken: localStorage.getItem("refreshToken"),
    })
    .then((res) => {
      localStorage.setItem("accessToken", res.data.accessToken);
      localStorage.setItem("refreshToken", res.data.refreshToken);
      window.location.reload();
    })
    .catch((rej) => {
      console.log(rej.response.data);
      if (
        rej.response.data.status === 400 &&
        rej.response.data.message === "잘못 된 데이터"
      ) {
        alert("토큰이 만료되었습니다. 다시 로그인 해주세요!");
        window.location.href = "/login";
      }
      return rej;
    });
};

export default reissue;
