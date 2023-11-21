import axios from "axios";

const baseURL = process.env.REACT_APP_BASE_URL;

const getProducts = async () => {
  return await axios
    .get(`${baseURL}/products`)
    .then((res) => {
      return res.data;
    })
    .catch((rej) => {
      console.log(rej);
      return rej;
    });
};

export default getProducts;
