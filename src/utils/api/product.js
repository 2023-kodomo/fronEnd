import axios from "axios";
import reissue from "./reissue";

const baseURL = process.env.REACT_APP_BASE_URL;

const getProduct = async (id) => {
  return await axios
    .get(`${baseURL}/products/${id}`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    })
    .then((res) => {
      return res.data;
    })
    .catch(async (rej) => {
      console.log(rej.response);
      if (rej.response.status === 403) {
        console.log("토큰 불러오기");
        await reissue();
      }
    });
};

export default getProduct;
