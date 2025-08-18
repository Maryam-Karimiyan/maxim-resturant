import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import slider_image1 from "../assets/slider_image1.jpg";
import slider_image2 from "../assets/slider_image2.jpg";
import slider_image3 from "../assets/slider_image3.jpg";
import slider_image4 from "../assets/slider_image4.jpg";
import slider_image5 from "../assets/slider_image5.jpg";
import { Box } from "@mui/material";

export default function ImageSlider() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnHover: true,
    arrows: false,
  };
  const items = [
    slider_image1,
    slider_image2,
    slider_image3,
    slider_image4,
    slider_image5,
  ];
  return (
    <Box sx={{ width: "100%", overflow: "hidden" }}>
      <Slider {...settings}>
        {items.map((img, index) => (
          <Box key={index}>
            <img
              src={img}
              alt={`Slide ${index + 1}`}
              style={{
                width: "100%",
                height: "270px",
                display: "block",
                objectFit: "cover",
              }}
            />
          </Box>
        ))}
      </Slider>
    </Box>
  );
}
