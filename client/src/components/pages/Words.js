import React, { Component } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import CssBaseline from "@material-ui/core/CssBaseline";
import Grid from "@material-ui/core/Grid";
import { withStyles } from "@material-ui/core/styles";
import Navbar from "../common/Navbar";
import HeroUnit from "../utils/HeroUnit";
import Card from "../utils/Card";
import axios from "axios";

const styles = theme => ({
  appBar: {
    position: "relative"
  },
  heroUnit: {
    backgroundColor: theme.palette.background.paper
  },
  heroContent: {
    maxWidth: 600,
    margin: "0 auto",
    padding: `${theme.spacing.unit * 8}px 0 ${theme.spacing.unit * 6}px`
  },
  layout: {
    width: "auto",
    marginLeft: theme.spacing.unit * 3,
    marginRight: theme.spacing.unit * 3,
    [theme.breakpoints.up(1100 + theme.spacing.unit * 3 * 2)]: {
      width: 1100,
      marginLeft: "auto",
      marginRight: "auto"
    }
  },
  cardGrid: {
    padding: `${theme.spacing.unit * 8}px 0`
  },
  card: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
    boxShadow: "0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22)"
  },
  cardMedia: {
    paddingTop: "56.25%", // 16:9
    height: "50%"
  },
  cardContent: {
    flexGrow: 1
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing.unit * 6
  }
});

class Album extends Component {
  constructor(props) {
    super(props);
    this.state = {
      words: [],
      err: ""
    };
  }
  componentDidMount() {
    this.getWordData();
  }
  getWordData = () => {
    axios
      .get("/words")
      .then(res => {
        this.setState({
          words: res.data,
          err: ""
        });
      })
      .catch(res => {
        if (!res.response) {
          this.setState({
            err: res
          });
        } else {
          this.setState({
            err: res
          });
        }
      });
  };

  render() {
    const cards = this.state.words
    const { classes } = this.props;
    return (
      <React.Fragment>
        <CssBaseline />
        <Navbar className={classes.appBar} />
        <main>
          {this.state.words.length === 0 ? (
            <div
              style={{
                display: "flex",
                color: "red",
                justifyContent: "center",
                alignItems: "center",
                fontSize: "2rem"
              }}
            >
              Kelimeniz Bulunmuyor.Lütfen Kelime Ekleyin
            </div>
          ) : (
            <div>
              <HeroUnit classes={classes} />
              <div className={classNames(classes.layout, classes.cardGrid)}>
                <Grid container spacing={40}>
                  {cards.map((card,index) => (
                    <Grid item key={index} sm={6} md={4} lg={3}>
                      <Card
                        getData={this.getWordData}
                        object={card}
                        classes={classes}
                      />
                    </Grid>
                  ))}
                </Grid>
              </div>
            </div>
          )}
        </main>
      </React.Fragment>
    );
  }
}

Album.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Album);
