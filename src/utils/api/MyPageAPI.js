import axios from "axios";

const baseURL = process.env.REACT_APP_BASE_URL;

const MyPageAPI = async () => {
  const accessToken = localStorage.getItem("accessToken");
  return await axios
    .get(`${baseURL}/user/my-page`, {
      header: {
        Authorization: ` Bearer ${accessToken}`,
      },
    })
    .then((res) => {
      return res.data;
    })
    .catch((rej) => {
      console.log(rej);
      return rej;
    });
};

export default MyPageAPI;
