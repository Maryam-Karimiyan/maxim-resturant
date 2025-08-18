import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home/home";
import MenuePage from "./pages/menue/menuePage";
import OrderDetail from "./pages/orderfoodDetail/OrderFoodDetail";
import { useSelector } from "react-redux";
import ButtonComponent from "./components/ButtonComponet";


function App() {
   const cart = useSelector((state) => state.cart);
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/menue/:type" element={<MenuePage />} />
          <Route path="/order/:type/:id" element={<OrderDetail />} />
          <Route path="*" element={<h1>صفحه پیدا نشد 😢</h1>} />
        </Routes>
        
      {cart.length > 0 && (
        <ButtonComponent badgeContent={cart.length}>مشاهده دفترچه یادداشت + {cart.length}</ButtonComponent>
        // <button className="fixed bottom-4 right-4 bg-blue-600 text-white px-4 py-2 rounded-full shadow-lg">
        //   سبد خرید ({cart.length})
        // </button>
      )}
      </Router>
    </>
  );
}

export default App;
