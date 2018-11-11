import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';

class NewFlashCard extends Component {
  state = {
    open: false,
  };

  handleClickOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

    render() {
        return (
        <div>
            <Button variant="fab" color="primary" aria-label="Add" onClick={this.handleClickOpen}>
                <AddIcon />
            </Button>
            <Dialog
                open={this.state.open}
                onClose={this.handleClose}
                aria-labelledby="form-dialog-title"
            >
                <DialogTitle id="form-dialog-title">Novo Card</DialogTitle>
                <DialogContent>
                    <TextField
                        autoFocus
                        margin="dense"
                        id="term"
                        label="Termo"
                        fullWidth
                    />
                    <TextField
                        margin="dense"
                        id="definition"
                        label="Definição"
                        multiline
                        fullWidth
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={this.handleClose} color="primary">
                        Cancelar
                    </Button>
                    <Button onClick={this.handleClose} color="primary">
                        Criar
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
        );
    }
}

export default NewFlashCard;