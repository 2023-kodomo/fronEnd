import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "../components/header";
import MainPage from "../pages/MainPage";
import ProductInfo from "../pages/ProductInfo";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/Header" element={<Header />} />
        <Route path="/" element={<MainPage />} />
        <Route path="/MoreInfo" element={<ProductInfo />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
