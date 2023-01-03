import { SigninPage } from "@/pages";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<SigninPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default Router