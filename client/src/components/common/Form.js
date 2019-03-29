import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

export default class FormDialog extends React.Component {  
  render() {
    return (
        <Dialog
          open={this.props.open}
          onClose={this.handleClose}
          aria-labelledby="form-dialog-title"
        >
          <DialogTitle id="form-dialog-title">Subscribe</DialogTitle>
          <DialogContent>
            <DialogContentText>
              To subscribe to this website, please enter your email address here. We will send
              updates occasionally.
            </DialogContentText>
            <TextField
              autoFocus
              margin="normal"
              id="word"
              label="İngilizce Kelimeyi Girin"
              type="text"
              fullWidth
            />
            <TextField
              autoFocus
              margin="normal"
              id="translate"
              label="Kelimenin Cevirisini Girin"
              type="text"
              fullWidth
            />
            <TextField
              autoFocus
              margin="normal"
              id="tur"
              label="Kelimenin Turunu Girin"
              type="text"
              fullWidth
            />
            <TextField
              autoFocus
              margin="normal"
              id="ornekCumle"
              label="Ornek Cumle Girin"
              type="text"
              fullWidth
            />
            
          </DialogContent>
          <DialogActions>
            <Button variant="outlined" onClick={this.props.close} color="primary">
              Kapat
            </Button>
            <Button variant="outlined" onClick={this.props.close} color="primary">
              Kelimeyi Ekle
            </Button>
          </DialogActions>
        </Dialog>
    
    );
  }
}