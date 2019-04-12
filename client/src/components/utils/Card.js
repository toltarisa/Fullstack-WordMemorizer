import React, { Component } from "react";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";


class CardComponent extends Component {
  state = {};
  isoToNormalDate = (newDate) => {
    let date = new Date(newDate);
    let year = date.getFullYear();
    let month = date.getMonth() + 1;
    let dt = date.getDate();

    if(dt < 10){
      dt = '0' + dt;
    }
    if(month < 10){
      month = '0' + month;
    }

    return dt + '-' + month + '-' + year;
  }
  render() {
   console.log(this.props.object);
    return (
      <div>
        <Card className={this.props.classes.card}>
          <CardMedia
            className={this.props.classes.cardMedia}
            image="https://image.flaticon.com/icons/svg/1707/1707252.svg" // eslint-disable-line max-len
            title="Image title"
          />
          <CardContent className={this.props.classes.cardContent}>
            <Typography gutterBottom variant="subtitle2" >
              <b>Kelime : </b>{this.props.object.word} 
            </Typography>
            <Typography gutterBottom variant="subtitle2" >
              <b>Çevirisi: </b> {this.props.object.translate} 
            </Typography>
            <Typography gutterBottom variant="subtitle2">
              <b>Türü : </b> {this.props.object.kind} 
            </Typography>
            <Typography gutterBottom variant="subtitle2">
              <b>Örnek : </b> {this.props.object.exampleSentence} 
            </Typography>
            <Typography variant="subtitle2">
              <b>Eklenme Tarihi: </b>{this.isoToNormalDate(this.props.object.createdAt)}  
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
