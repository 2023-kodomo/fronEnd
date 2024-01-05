import axios from "axios";

const baseURL = process.env.REACT_APP_BASE_URL;

const delProduct = async (productId) => {
  await axios
    .delete(`${baseURL}/products/${productId}`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    })
    .catch(({ response }) => {
      console.log(response.data);
      if (
        response.data.status === 404 &&
        response.data.message === "상품을 찾지 못했습니다."
      ) {
        alert("이미 삭제된 상품입니다.");
      }
    });
};

export default delProduct;
