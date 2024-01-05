import axios from "axios";

const baseURL = process.env.REACT_APP_BASE_URL;

const ModalImg = async () => {
  const accessToken = localStorage.getItem("accessToken");
  return await axios
    .get(`${baseURL}/user/my-qr`, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    })
    .catch((rej) => {
      console.log(rej);
      return rej;
    });
};

export default ModalImg;
