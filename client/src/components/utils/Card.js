import React from "react";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

const CardComponent = props => {
  return (
    <div>
      <Card className={props.classes.card}>
        <CardMedia
          className={props.classes.cardMedia}
          image="https://image.flaticon.com/icons/svg/1707/1707252.svg" // eslint-disable-line max-len
          title="Image title"
        />
        <CardContent className={props.classes.cardContent}>
          <Typography gutterBottom variant="h7" component="h3">
            Kelime : 
          </Typography>
          <Typography gutterBottom variant="h7" component="h3">
            Çevirisi: 
          </Typography>
          <Typography gutterBottom variant="h7" component="h3">
            Türü: 
          </Typography>
          <Typography variant="h7" component="h5">
            Örnek : This Ball is so tough,it just broke my finger.
          </Typography>
        </CardContent>
        <CardActions>
          <Button variant="outlined" size="small" color="secondary">
            Edit
          </Button>
          <Button variant="outlined" size="small" color="secondary">
            Delete
          </Button>
        </CardActions>
      </Card>
    </div>
  );
};

export default CardComponent;
