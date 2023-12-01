import axios from "axios";

const baseURL = process.env.REACT_APP_BASE_URL;

const delComment = async (commentId) => {
  await axios
    .delete(`${baseURL}/comments/${commentId}`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    })
    .catch(({ response }) => {
      console.log(response.data);
      if (
        response.data.status === 404 &&
        response.data.message === "댓글을 찾지 못했습니다."
      ) {
        alert("이미 삭제된 댓글 입니다!");
      }
    });
};

export default delComment;
