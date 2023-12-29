import axios from "axios";

const baseURL = process.env.REACT_APP_BASE_URL;

const postProduct = async (product) => {
  await axios
    .post(`${baseURL}/products`, product, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    })
    .catch(({ response }) => {
      if (response.status === 400) {
        if (response.message === "가격은 0 또는 양수만 입력가능합니다.") {
          alert("가격은 0 이상의 정수만 입력할 수 있습니다.");
        } else if (response.message === "제목이 비어있습니다.") {
          alert("상품명을 입력해주세요.");
        } else if (response.message === "내용이 비어있습니다.") {
          alert("상품 설명을 입력해주세요.");
        }
      }
    });
};

export default postProduct;
