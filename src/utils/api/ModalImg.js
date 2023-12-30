import axios from "axios";

const baseURL = process.env.REACT_APP_BASE_URL;

const ModalImg = async () => {
  const accessToken = localStorage.getItem("accessToken");
  return await axios
    .get(`${baseURL}/my-qr`, {
      header: {
        Authorization: ` Bear ${accessToken}`,
      },
    })
    .then((res) => {
      return res.data;
    });
};

export default ModalImg;
