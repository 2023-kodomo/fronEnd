import axios from "axios";

const baseURL = process.env.REACT_APP_API_URL;

const ModalImg = async () => {
  const accessToken = localStorage.getItem("accessToken");
  return await axios
    .get(`${baseURL}/user/my-qr`, {
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

export default ModalImg;
