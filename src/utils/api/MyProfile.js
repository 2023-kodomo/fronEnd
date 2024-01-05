import axios from "axios";

const baseURL = process.env.REACT_APP_BASE_URL;

const MyProfile = async () => {
  const accessToken = localStorage.getItem("accessToken");
  return await axios
    .put(`${baseURL}/user/my-page/custom`, {
      header: {
        "Content-Type": "application/form-data",
        Authorization: ` Bearer ${accessToken}`,
      },
    })
    .catch((rej) => {
      console.log(rej);
    });
};

export default MyProfile;
