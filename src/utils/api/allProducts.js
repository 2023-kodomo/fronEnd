import axios from "axios";

const baseURL = process.env.REACT_APP_BASE_URL;

const getProducts = async () => {
  return await axios
    .get(`${baseURL}/products`)
    .then((res) => {
      return res.data;
    })
    .catch((rej) => {
      console.log(rej.message);
      switch (rej.message) {
        case "Network Error":
          return "네트워크 에러, 인터넷 연결을 확인해 주세요";
        default:
          return "음...무언가 잘못되었습니다.";
      }
    });
};

export default getProducts;
