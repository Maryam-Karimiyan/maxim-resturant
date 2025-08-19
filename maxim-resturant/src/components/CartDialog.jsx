import {
  Box,
  Card,
  CardMedia,
  CardContent,
  Typography,
  IconButton,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import DialogComponent from "./DialoComponent";
import CloseIcon from "@mui/icons-material/Close";
import { useSelector } from "react-redux";
import ButtonComponent from "./ButtonComponet";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { addToCart, removeFromCart } from "../redux/cartSlice";
import ScreenshotBtn from "./ScreenshotBtn";
function CartDialog({ open, onClose }) {
  const cart = useSelector((state) => state.cart);
  const [totalPrice, setTotalPrice] = useState(0);
  const dispatch = useDispatch();
  useEffect(() => {
    const total = cart.reduce(
      (acc, item) => acc + parseInt(item.price_number) * item.quantity,
      0
    );
    setTotalPrice(parseInt(total));
  }, [cart]);
  return (
    <>
      <DialogComponent
        bgcolor="#fff"
        CloseIcon={<CloseIcon sx={{ color: "#272727" }} />}
        open={open}
        onClose={onClose}
        transitionMove="up"
      >
        <Box sx={{ width: "100%", height: "100%", m: 0 }}>
          <Typography variant="h4" fontWeight="bold" textAlign="right">
            دفترچه یادداشت
          </Typography>
          {cart.map((item, index) => (
            <Card
              variant="outlined"
              key={index}
              sx={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
                margin: "10px auto",
                border: "1px dashed #272727",
              }}
            >
              {/* Left side: Quantity controls */}
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  pl: 2,
                }}
              >
                <IconButton aria-label="remove">
                  <RemoveIcon
                    onClick={() => dispatch(removeFromCart(item))}
                    sx={{ border: "1px solid", borderRadius: "50%" }}
                  />
                </IconButton>
                <Typography variant="h6" sx={{ mx: 1 }}>
                  {item.quantity}
                </Typography>
                <IconButton aria-label="add">
                  <AddIcon
                    onClick={() => dispatch(addToCart(item))}
                    sx={{ border: "1px solid", borderRadius: "50%" }}
                  />
                </IconButton>
              </Box>

              {/* Right side: Image and details */}
              <Box
                sx={{
                  display: "flex",
                  alignItems: "flex-start",
                  flexDirection: "row-reverse",
                }}
              >
                <CardMedia
                  component="img"
                  sx={{
                    width: 130,
                    objectFit: "cover",
                    m: 1,
                    borderRadius: "5px",
                  }}
                  image={item.image}
                  alt={item.name}
                />
                <CardContent
                  sx={{
                    flex: "1 0 auto",
                    textAlign: "right",
                    pr: 2,
                  }}
                >
                  <Typography component="div" variant="h6">
                    {item.name}
                  </Typography>
                  <Typography
                    variant="subtitle2"
                    color="text.secondary"
                    component="div"
                  >
                    {item.price}
                  </Typography>
                </CardContent>
              </Box>
            </Card>
          ))}
          {cart.length !== 0 && (
            <ButtonComponent
              sx={{
                width: "100%",
                bgcolor: "#000000",
                color: "#fff",
                borderRadius: "10px",
              }}
            >
              <Typography variant="subtitle1">
                مجموع : {totalPrice && totalPrice} تومان
              </Typography>
            </ButtonComponent>
          )}
          <ScreenshotBtn />
        </Box>
      </DialogComponent>
    </>
  );
}

export default CartDialog;
