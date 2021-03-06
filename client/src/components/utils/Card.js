import React, { Component } from "react";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import axios from "axios";
import Toastify from "toastify-js";
import Form from "../common/Form";
import moment from 'moment';


class CardComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      id: this.props.object._id,
      open: false,
      word: this.props.object.word,
      translate: this.props.object.translate,
      kind: this.props.object.kind,
      example: this.props.object.exampleSentence
    };
    
    this.handleUpdate = this.handleUpdate.bind(this);
  }

  componentDidMount() {
    this.handleDelete();
  }
  handleDelete = (id) => {
    axios
      .delete(`http://localhost:3001/words/delete/${id}`)
      .then(res => {
        if (res.status === 200) {
          Toastify({
            text: "Kelimeniz Silindi",
            backgroundColor: "linear-gradient(to right, #eb3349, #f45c43)",
            positionLeft: true,
            duration: 4000,
            gravity: "bottom"
          }).showToast();
          this.props.getData();
        }
      })
      .catch(err => {
        console.log(err.message);
      });
  };

  openDialog = () => {
    this.setState({
      open: !this.state.open
    });
  };

  handleInput = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleUpdate = () => {
    let id = this.props.object._id;
    let obj = {
      word: this.state.word,
      translate: this.state.translate,
      kind: this.state.kind,
      exampleSentence: this.state.example
    };

    axios
      .put(`http://localhost:3001/words/update/${id}`, obj)
      .then(res => {
        if (res.status === 200) {
          Toastify({
            text: "Kelimeniz Başarıyla Güncellendi",
            backgroundColor: "linear-gradient(to right, #ffb347, #ffcc33)",
            positionLeft: true,
            duration: 4000,
            gravity: "bottom"
          }).showToast();
          this.props.getData();
        }
        this.openDialog();
      })
      .catch(err => {
        console.log(err);
      });
  };

  render() {
    return (
      <div>
        <Form
          close={this.openDialog}
          open={this.state.open}
          openDialog={this.openDialog}
          onInput={this.handleInput}
          data={this.props.object}
          onRequest={this.handleUpdate}
        />
        <Card className={this.props.classes.card}>
          <CardMedia
            className={this.props.classes.cardMedia}
            image="https://image.flaticon.com/icons/svg/1707/1707252.svg" // eslint-disable-line max-len
            title="Image title"
          />
          <CardContent className={this.props.classes.cardContent}>
            <Typography gutterBottom variant="subtitle2">
              <b>Kelime : </b> {this.props.object.word}
            </Typography>
            <Typography gutterBottom variant="subtitle2">
              <b>Çevirisi: </b> {this.props.object.translate}
            </Typography>
            <Typography gutterBottom variant="subtitle2">
              <b>Türü : </b> {this.props.object.kind}
            </Typography>
            <Typography gutterBottom variant="subtitle2">
              <b>Örnek : </b> {this.props.object.exampleSentence}
            </Typography>
            <Typography gutterBottom variant="subtitle2">
              <b>Seviye : </b> {this.props.object.level}
            </Typography>
            <Typography gutterBottom variant="subtitle2">
              <b>Öğrenilme Tarihi : </b> {moment(this.props.object.date).utc().local().format('DD:MM:YYYY')}
            </Typography>
          </CardContent>
          <CardActions>
            <Button
              onClick={this.openDialog}
              variant="outlined"
              size="small"
              color="secondary"
            >
              Düzenle
            </Button>
            <Button
              onClick={() => this.handleDelete(this.props.object._id)}
              variant="outlined"
              size="small"
              color="secondary"
            >
              Sil
            </Button>
          </CardActions>
        </Card>
      </div>
    );
  }
}

export default CardComponent;
