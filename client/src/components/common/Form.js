import React from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";

export default class FormDialog extends React.Component {
  render() {
    return (
      <Dialog
        open={this.props.open}
        onClose={this.openDialog}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">
          Kelime Bilgilerini Giriniz
        </DialogTitle>
        <DialogContent>
          <form>
          <TextField
            autoComplete="off"
            name="word"
            margin="normal"
            id="word"
            label="İngilizce Kelimeyi Girin"
            type="text"
            onChange={this.props.onInput}
            value={this.props.input}
            fullWidth
            required
            variant="outlined"
          />
          <TextField
            autoComplete="off"
            name="translate"
            margin="normal"
            id="translate"
            label="Kelimenin Cevirisini Girin"
            type="text"
            onChange={this.props.onInput}
            fullWidth
            required
            variant="outlined"
          />
          <TextField
            autoComplete="off"
            name="kind"
            margin="normal"
            id="tur"
            label="Kelimenin Türünü Girin"
            type="text"
            onChange={this.props.onInput}
            fullWidth
            required
            variant="outlined"
          />
          <TextField
            autoComplete="off"
            name="example"
            margin="normal"
            id="ornekCumle"
            label="Ornek Cumle Girin"
            type="text"
            onChange={this.props.onInput}
            fullWidth
            required
            variant="outlined"
          />
          </form>
        </DialogContent>
        <DialogActions>
          <Button variant="outlined" onClick={this.props.close} color="primary">
            Kapat
          </Button>
          <Button
            variant="outlined"
            onClick={this.props.onRequest}
            color="primary"
          >
            Kelimeyi Ekle
          </Button>
        </DialogActions>
      </Dialog>
    );
  }
}
