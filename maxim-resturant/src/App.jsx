import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home/home";
import MenuePage from "./pages/menue/menuePage";
import OrderDetail from "./pages/orderfoodDetail/OrderFoodDetail";
import Cartbutton from "./components/Cartbutton";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/menue/:type" element={<MenuePage />} />
          <Route path="/order/:type/:id" element={<OrderDetail />} />
          <Route path="*" element={<h1>صفحه پیدا نشد 😢</h1>} />
        </Routes>
      </Router>
      <Cartbutton/>
    </>
  );
}

export default App;
