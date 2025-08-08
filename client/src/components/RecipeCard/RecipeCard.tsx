import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActionArea from "@mui/material/CardActionArea";
import CardActions from "@mui/material/CardActions";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

import AppButton from "~/components/AppButton/AppButton";

import placeholder from "~/assets/images/placeholder.svg";

import styles from "~/components/RecipeCard/RecipeCard.module.scss"

//TODO:FINISH STYLING THE CARD
function RecipeCard() {
  return (
    <Box className={styles["cards"]} component="div">
      <Card sx={{ maxWidth: 325, width: "100%" }}>
        <CardActionArea>
          <CardMedia component="img" height="140" image={placeholder} />
          <CardContent>
            <Typography variant="h5" component="div" gutterBottom>
              French Toast
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <AppButton buttonText="View" type="button"/>
        </CardActions>
      </Card>
    </Box>
  );
}

export default RecipeCard;
