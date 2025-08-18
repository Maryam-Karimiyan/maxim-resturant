import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import ButtonComponent from "./ButtonComponet";
import CardActionArea from "@mui/material/CardActionArea";
import CardActions from "@mui/material/CardActions";
import { Box, colors, Divider } from "@mui/material";
import { Padding } from "@mui/icons-material";

export function CardComponent({
  image,
  title,
  description,
  buttonText = "Share",
  onButtonClick,
  maxWidth = 500,
}) {
  return (
    <Card sx={{ maxWidth }}>
      <CardActionArea>
        {image && (
          <CardMedia component="img" image={image} alt={title} height="500vh" />
        )}
        <CardContent
          sx={{
            textAlign: "end",
            backgroundColor: "#010101",
            color: "#fff",
            mt: "-10px",
          }}
        >
          {title && (
            <Typography
              fontFamily="tahoma"
              gutterBottom
              variant="h5"
              component="div"
            >
              {title}
            </Typography>
          )}
          {description && (
            <Typography mt={4} variant="body2">{description}</Typography>
          )}
        </CardContent>
      </CardActionArea>
      <Divider />
      {buttonText && (
        <CardActions sx={{ p: 0, justifyContent: "center" }}>
          <ButtonComponent
            sx={{
              color: "#fff",
              backgroundColor: "#010101",
              borderRadius: 0,
              p: "10px",
              width: "100%",
              fontWeight: "700",
              fontFamily: "tahoma",
            }}
            size="small"
            onClick={onButtonClick}
          >
            {buttonText}
          </ButtonComponent>
        </CardActions>
      )}
    </Card>
  );
}

export function CardsByData({ data }) {
  return (
    <Box>
      {data.map((item) => {
        <CardComponent
          key={item.id}
          image={item.image}
          title={item.title}
          description={item.price}
          buttonText="افزودن سفارش"
        />;
      })}
    </Box>
  );
}
