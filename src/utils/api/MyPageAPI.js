import axios from "axios";
import reissue from "./reissue";

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
      if (rej.response.status === 403) {
        reissue();
      } else {
        return null;
      }
    });
};

export default MyPageAPI;
