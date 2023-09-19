import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "../components/header";
import MainPage from "../pages/MainPage";
import ProductInfo from "../pages/ProductInfo";
import WritingPage from "../pages/WritingPage";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/Header" element={<Header />} />
        <Route path="/" element={<MainPage />} />
        <Route path="/MoreInfo" element={<ProductInfo />} />
        <Route path="/Posting" element={<WritingPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
