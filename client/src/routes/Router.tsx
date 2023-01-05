import { SigninPage } from "@/pages";
import { TodosPage } from "@/pages/TodosPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<SigninPage />} />
        <Route path='todos'>
          <Route index element={<TodosPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default Router