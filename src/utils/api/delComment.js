import axios from "axios";

const baseURL = process.env.REACT_APP_BASE_URL;

const delComment = async (commentId) => {
  await axios.delete(`${baseURL}/comments/${commentId}`, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
    },
  });
};

export default delComment;
