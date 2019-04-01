import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';

export default class FormDialog extends React.Component {  
  render() {
    return (
        <Dialog
          open={this.props.open}
          onClose={this.openDialog}
          aria-labelledby="form-dialog-title"
        >
          <DialogTitle id="form-dialog-title">Kelime Bilgilerini Giriniz</DialogTitle>
          <DialogContent>
            <form>
            <TextField
              autoFocus
              name="word"
              margin="normal"
              value={this.props.word}
              id="word"
              label="İngilizce Kelimeyi Girin"
              type="text"
              onChange={this.handleInput}
              fullWidth
            />
            <TextField
              autoFocus
              name="translate"
              margin="normal"
              value={this.props.translate}
              id="translate"
              label="Kelimenin Cevirisini Girin"
              type="text"
              onChange={this.handleInput}
              fullWidth
            />
            <TextField
              autoFocus
              name="kind"
              margin="normal"
              value={this.props.kind}
              id="tur"
              label="Kelimenin Türünü Girin"
              type="text"
              onChange={this.handleInput}
              fullWidth
            />
            <TextField
              autoFocus
              name="example"
              margin="normal"
              value={this.props.example}
              id="ornekCumle"
              label="Ornek Cumle Girin"
              type="text"
              onChange={this.handleInput}
              fullWidth
            />
            </form>
            
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