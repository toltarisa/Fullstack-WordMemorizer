import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import { withStyles } from "@material-ui/core/styles";
import Fab from "@material-ui/core/Fab";
import AddIcon from "@material-ui/icons/Add";
import FormDialog from "./Form";
import axios from "axios";
import Toastify from "toastify-js";

const styles = theme => ({
  heroUnit: {
    backgroundColor: theme.palette.background.paper
  },
  heroContent: {
    maxWidth: 600,
    margin: "0 auto",
    padding: `${theme.spacing.unit * 8}px 0 ${theme.spacing.unit * 6}px`
  },
  heroButtons: {
    marginTop: theme.spacing.unit * 4
  },
  fab: {
    margin: theme.spacing.unit * -1,
    marginRight: theme.spacing.unit * 7
  }
});

class ShowCase extends Component {
  constructor(props) {
    super(props);

    this.state = {
      open: false,
      word: "",
      translate: "",
      kind: "",
      example: "",
    };
  }
  openDialog = () => {
    this.setState({ open: !this.state.open });
  };
  handleInput = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };
  postRequest = () => {
    const url = "/words";
    axios
      .post(url, {
        word: this.state.word,
        translate: this.state.translate,
        kind: this.state.kind,
        exampleSentence: this.state.example
      })
      .then(res => {
        if (res.status === 201) {
          Toastify({
            text: "Kelimeniz Sisteme Eklendi",
            backgroundColor: "linear-gradient(to right, #00b09b, #96c93d)",
            positionLeft: true,
            duration: 4000,
            gravity: "bottom"
          }).showToast();
          this.openDialog();
          this.setState({
            word: "",
            translate: "",
            kind: "",
            example: ""
          });
        }
        
      })
      .catch(err => {
        throw err;
      });
  };

  render() {
    const { word, translate, kind, example } = this.state;
    const { classes } = this.props;
    return (
      <div>
        <div className={classes.heroUnit}>
          <div className={classes.heroContent}>
            <Typography
              component="h1"
              variant="h2"
              align="center"
              color="textPrimary"
              gutterBottom
            >
              FullStack Word Memorizer
            </Typography>
            <Typography
              variant="h6"
              align="center"
              color="textSecondary"
              paragraph
            >
              Ezberlemek istediğin ingilizce kelimelerin mi var ? O zaman
              ezberlemek istediğin kelimeleri ekle ve kendini test et
            </Typography>
            <div className={classes.heroButtons}>
              <Grid container spacing={16} justify="center">
                <Grid item>
                  <FormDialog
                    onRequest={this.postRequest}
                    onInput={this.handleInput}
                    open={this.state.open}
                    close={this.openDialog}
                    data={{ word, translate, kind, example }}
                  />
                  <Fab
                    onClick={this.openDialog}
                    color="primary"
                    aria-label="Add"
                    className={classes.fab}
                  >
                    <AddIcon />
                  </Fab>
                </Grid>
                <Grid item>
                  <Button href="/words" variant="outlined" color="primary">
                    Kelimelerim
                  </Button>
                </Grid>
              </Grid>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(ShowCase);
