import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import Product from "./pages/Product";
import Homepage from "./pages/Homepage";
import CityList from "./Components/CItyLits";
import Pricing from "./pages/Pricing";
import PageNotFound from "./pages/PageNotFound";
import AppLayout from "./pages/AppLayout";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/home" element={<Homepage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/product" element={<Product />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="app" element={<AppLayout />}>
            {/* <Route index element={<Navigate replace to="cities" />} /> */}
            <Route index element={<CityList />} />
            <Route path="cities" element={<CityList />} />
            {/* <Route path="cities/:id" element={<p>country</p>} /> */}
            <Route path="countries" element={<p>countries</p>} />
            <Route path="form" element={<p>form</p>} />
          </Route>
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
