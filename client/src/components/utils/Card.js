import React, { Component } from "react";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

class CardComponent extends Component {
  state = {};
  render() {
    console.log(this.props);
    return (
      <div>
        <Card className={this.props.classes.card}>
          <CardMedia
            className={this.props.classes.cardMedia}
            image="https://image.flaticon.com/icons/svg/1707/1707252.svg" // eslint-disable-line max-len
            title="Image title"
          />
          <CardContent className={this.props.classes.cardContent}>
            <Typography gutterBottom variant="subtitle">
              <b>Kelime :</b>
            </Typography>
            <Typography gutterBottom variant="subtitle">
              <b>Çevirisi: </b>
            </Typography>
            <Typography gutterBottom variant="subtitle">
              <b>Türü :</b>
            </Typography>
            <Typography gutterBottom variant="subtitle">
              <b>Örnek : </b>
            </Typography>
            <Typography variant="subtitle" component="h5">
              <b>Eklenme Tarihi:</b>
            </Typography>
          </CardContent>
          <CardActions>
            <Button variant="outlined" size="small" color="secondary">
              Düzenle
            </Button>
            <Button variant="outlined" size="small" color="secondary">
              Sil
            </Button>
          </CardActions>
        </Card>
      </div>
    );
  }
}

export default CardComponent;
