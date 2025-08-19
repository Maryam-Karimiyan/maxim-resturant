import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import ButtonComponent from "./ButtonComponet";
import CardActionArea from "@mui/material/CardActionArea";
import CardActions from "@mui/material/CardActions";
import { Divider } from "@mui/material";

export function CardComponent({
  image,
  title,
  description,
  buttonText,
  onButtonClick,
  minWidth = "100%",
  sx,
  ...rest
}) {
  return (
    <Card sx={{ minWidth, ...sx }} {...rest}>
      <CardActionArea>
        {image && (
          <CardMedia
            sx={{ height: { xs: "10rem", md: "45rem" } }}
            component="img"
            image={image}
            alt={title}
          />
        )}
        <CardContent
          sx={{
            textAlign: "end",
            backgroundColor: "#010101",
            color: "#fff",
            // mt: "-10px",
          }}
        >
          {title && (
            <Typography
              fontFamily="tahoma"
              gutterBottom
              variant={{ xs: "subtitle1", md: "h5" }}
              component="div"
            >
              {title}
            </Typography>
          )}
          {description && (
            <Typography
              sx={{ direction: "rtl", textAlign: "right" }}
              mt={4}
              variant="body2"
            >
              {description}
            </Typography>
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
