import axios from "axios";

const baseURL = process.env.REACT_APP_BASE_URL;

const sendEmail = async (email) => {
  await axios
    .post(`${baseURL}/email/send`, {
      email: `${email}`,
    })
    .then(() => console.log("이메일을 보냈어요"))
    .catch(({ response }) => {
      console.log(response.data);
    });
};

export default sendEmail;
