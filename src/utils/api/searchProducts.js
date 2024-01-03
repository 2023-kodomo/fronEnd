import axios from "axios";
import reissue from "./reissue";

const searchProduct = async (text) => {
  const baseURL = process.env.REACT_APP_BASE_URL;
  return await axios
    .get(`${baseURL}/products/search?input=${text}`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    })
    .then((res) => {
      return res.data;
    })
    .catch((rej) => {
      if (rej.response.status === 403) {
        reissue();
      }
      console.log(rej);
    });
};

export default searchProduct;
