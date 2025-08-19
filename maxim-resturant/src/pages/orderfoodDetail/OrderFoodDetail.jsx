import { Box, Container, Stack, Typography } from "@mui/material";
import { useParams } from "react-router-dom";
import data from "../../category.json";
import { useSelector } from "react-redux";
import ButtonComponent from "../../components/ButtonComponet";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/cartSlice";
function OrderDetail() {
  const { type, id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const index = useSelector((state) => state.menueIndex.activeItem);
  const subItem = index !==null
    ? data[type][index]["items"].find((i) => i.id == id)
    : {};

  return (
    <Container
      maxWidth={false}
      disableGutters
      sx={{
        width: "100%",
        height:"100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#FFF",
        padding: {sm:"1px",xs:"10px"},
        m:0
      }}
    >
      <Box sx={{ width: "100%", maxWidth: 350, p: { xs: 2, sm: 5 } }}>
        {/* return btn */}
        <ButtonComponent
          onClick={() => {
            navigate(-1);
          }}
          sx={{
            fontSize: "1rem",
            fontFamily: "tahoma",
            top: "30px",
            right: 0,
            color: "#ffff",
            backgroundColor: "#010101",
            borderRadius: "20px",
            borderRadius: "25px 0 0 25px",
            position: "absolute",
          }}
        >
          بازگشت
        </ButtonComponent>
        <Stack>
          <Typography fontWeight="bold" variant="h6">
            {subItem.name}
          </Typography>
          <Typography  variant="subtitle2">{subItem.price}</Typography>
        </Stack>
        <Box
          sx={{ width: "100%", mt: 5 }}
          component="img"
          src={subItem.image}
        />
        <Box textAlign="right"  width="100%">
          <Typography variant="overline">{subItem.description}</Typography>
        </Box>
        {/* add to cart btn */}
        <ButtonComponent
          onClick={() =>
            dispatch(
              addToCart({ ...subItem, quantity: (subItem.quantity || 0) + 1 })
            )
          }
          sx={{
            color: "#000",
            borderRadius: "10px",
            backgroundColor: "#f1f1f1",
            width: "100%",
            mt: 1,
          }}
        >
          افزودن به سفارش
        </ButtonComponent>
      </Box>
    </Container>
  );
}

export default OrderDetail;
