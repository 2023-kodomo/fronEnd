import axios from "axios";
import reissue from "./reissue";

const baseURL = process.env.REACT_APP_BASE_URL;

const postComment = async (productId, content) => {
  await axios
    .post(
      `${baseURL}/comments`,
      {
        productId: `${productId}`,
        content: `${content}`,
      },
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
      }
    )
    .catch(({ response }) => {
      if (response.status === 403) {
        reissue();
      }
      return response;
    });
};

export default postComment;
