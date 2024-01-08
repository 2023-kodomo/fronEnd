import axios from "axios";

const baseURL = process.env.REACT_APP_BASE_URL;

const MyPageAPI = async () => {
  const accessToken = localStorage.getItem("accessToken");
  return await axios
    .get(`${baseURL}/user/my-page`, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    })
    .then((res) => {
      return {
        myName: res.data.name,
        myImg: res.data.profileImage,
        myProduct: res.data.product,
      };
    })
    .catch((rej) => {
      console.log(rej);
      return rej;
    });
};

export default MyPageAPI;
