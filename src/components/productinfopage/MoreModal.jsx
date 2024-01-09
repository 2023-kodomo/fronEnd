import styled from "styled-components";
import delProduct from "../../utils/api/delProduct";

const MoreModal = ({ product }) => {
  const editButtonClickHandler = () => {
    window.location.href = `/Modifying?productId=${product}`;
  };

  const delButtonClickHandler = async () => {
    if (window.confirm("게시물을 삭제하시겠습니까?")) {
      await delProduct(product);
      window.location.href = "/";
    }
  };

  return (
    <ModalBox>
      <EditButton onClick={editButtonClickHandler}>수정</EditButton>
      <hr />
      <DelButton onClick={delButtonClickHandler}>삭제</DelButton>
    </ModalBox>
  );
};

export default MoreModal;

const ModalBox = styled.div`
  position: absolute;
  background-color: white;
  color: black;
  border-radius: 16px;
  width: 96px;
  right: 50%;
  transform: translate(50%);
  display: flex;
  flex-direction: column;
  font-family: "Hakgyoansim Wooju";

  & > hr {
    margin: 0;
  }

  & > button {
    padding: 5px;
    background-color: white;
  }

  & > button:hover {
    background-color: #d9d9d9;
  }
`;

const EditButton = styled.button`
  border: 0;
  outline: 0;
  border-radius: 16px 16px 0 0;
`;

const DelButton = styled.button`
  color: red;
  border: 0;
  outline: 0;
  border-radius: 0 0 16px 16px;
`;
