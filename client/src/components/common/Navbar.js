import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import { withStyles } from "@material-ui/core/styles";
const styles = {
  root: {
    flexGrow: 1
  },
  grow: {
    flexGrow: 1
  },
  btn: {
    marginRight: "10px"
  }
};

const Navbar = props => {
  const { classes } = props;
  return (
    <div>
      <div className={classes.root}>
        <AppBar color="primary" position="static" className={props.appBar}>
          <Toolbar>
            <Typography
              className={classes.grow}
              variant="h6"
              color="inherit"
              noWrap
            >
              Word Memorizer
            </Typography>
            <Button href="/" className={classes.btn} color="inherit">
              Ana Sayfa
            </Button>
            <Button href="/test" color="inherit">
              Test Et
            </Button>
            <Button href="/stats" color="inherit">
              İSTATİSTİKLER
            </Button>
          </Toolbar>
        </AppBar>
      </div>
    </div>
  );
};

export default withStyles(styles)(Navbar);
