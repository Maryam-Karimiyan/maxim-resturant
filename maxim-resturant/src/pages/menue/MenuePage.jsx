import { useParams } from "react-router-dom";
import SidebarMenue from "../../components/SidebarMenue";
import data from "../../category.json";
import { CardComponent } from "../../components/CardComponent";
import { useSelector, useDispatch } from "react-redux";
import ButtonComponent from "../../components/ButtonComponet";
import { Box } from "@mui/material";
import { changeIndex } from "../../redux/menueSlice";
import { useNavigate } from "react-router-dom";

function MenuePage() {
  const index = useSelector((state) => state.menueIndex.activeItem);
  const { type } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const subMenueItems = index ? data[type][index]["items"] : [];

  const subMenue = (
    <Box>
      {subMenueItems.map((item) => (
        <CardComponent
          key={item.id}
          image={item.image}
          title={item.name}
          description={item.price}
          buttonText="افزودن سفارش"
          sx={{ mt: 2 }}
          onClick={()=>navigate(`/order/${type}/${item.id}`)}
        />
      ))}
      {index != null ? (
        <Box mt={5} display="flex" justifyContent="center" gap={5}>
          <ButtonComponent
            onClick={() =>
              dispatch(
                changeIndex(index > 0 ? index - 1 : data[type].length - 1)
              )
            }
            sx={{
              color: "#ffff",
              backgroundColor: "#010101",
              borderRadius: "20px",
              px: 3,
            }}
          >
            قبلی
          </ButtonComponent>
          <ButtonComponent
            onClick={() =>
              dispatch(
                changeIndex(index < data[type].length - 1 ? index + 1 : 0)
              )
            }
            sx={{
              color: "#ffff",
              backgroundColor: "#010101",
              borderRadius: "20px",
              px: 3,
            }}
          >
            بعدی
          </ButtonComponent>
        </Box>
      ) : (
        ""
      )}
    </Box>
  );

  return (
    <>
      <SidebarMenue type={type} children={subMenue} />
    </>
  );
}

export default MenuePage;
