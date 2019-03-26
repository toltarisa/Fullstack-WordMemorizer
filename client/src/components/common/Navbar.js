import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
const  Navbar = props =>{
    return(
        <AppBar color="secondary" position="static" className={props.appBar}>
        <Toolbar>
          <Typography variant="h6" color="inherit" noWrap>
            Word Memorizer
          </Typography>
        </Toolbar>
      </AppBar>
    );
}

export default Navbar;