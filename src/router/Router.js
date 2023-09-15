import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "../components/header";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/Header" element={<Header />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
