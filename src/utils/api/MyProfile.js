import axios from "axios";

const baseURL = process.env.REACT_APP_BASE_URL;

const MyProfile = async (imageFile) => {
  const accessToken = localStorage.getItem("accessToken");

  const formData = new FormData();

  formData.append("image", imageFile);

  return await axios
    .put(`${baseURL}/user/my-page/custom`, formData, {
      headers: {
        "Content-Type": "application/form-data",
        Authorization: `Bearer ${accessToken}`,
      },
    })
    .then((response) => {
      console.log(response.data);
      return response.data;
    })
    .catch((error) => {
      console.log(error);
      return error;
    });
};

export default MyProfile;
