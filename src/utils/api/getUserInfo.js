import axios from "axios";
import reissue from "./reissue";

const baseURL = process.env.REACT_APP_BASE_URL;

const getUserInfo = async () => {
  const accessToken = localStorage.getItem("accessToken");
  if (accessToken) {
    return await axios
      .get(`${baseURL}/user/my-page`, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      })
      .then((res) => {
        return {
          userName: res.data.name,
          userImg: res.data.profileImage,
        };
      })
      .catch((rej) => {
        if (rej.response.status === 403) {
          reissue();
        }
      });
  } else {
    return null;
  }
};

export default getUserInfo;
