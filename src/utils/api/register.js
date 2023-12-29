import axios from "axios";

const baseURL = process.env.REACT_APP_BASE_URL;

const register = async (email, name, password) => {
  return await axios.post(`${baseURL}/signup`, {
    email: email,
    name: name,
    password: password,
  });
};

export default register;
