import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "../components/HeaderComponent";
import MainPage from "../pages/MainPage";
import ProductInfo from "../pages/ProductInfo";
import WritingPage from "../pages/WritingPage";
import MyPage from "../pages/MyPage";
import RegisterPage from "../pages/RegisterPage";
import LoginPage from "../pages/LoginPage";
import EmailPage from "../pages/EmailPage";
import User from "../components/MyPage/User";
import { MyQRCode } from "./../components/MyPage/MyQRCode/MyQRCode";

import SearchPage from "./../pages/SearchPage";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/Header" element={<Header />} />
        <Route path="" element={<MainPage />} />
        <Route path="/MoreInfo" element={<ProductInfo />} />
        <Route path="/Posting" element={<WritingPage />} />
        <Route path="/MyPage" element={<MyPage />} />
        <Route path="/Register" element={<RegisterPage />} />
        <Route path="/Login" element={<LoginPage />} />
        <Route path="/Email" element={<EmailPage />} />
        <Route path="/User" element={<User />} />
        <Route path="/Search" element={<SearchPage />} />
        <Route path="/MyQrcode" element={<MyQRCode />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
