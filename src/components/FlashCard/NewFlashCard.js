import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import { Api } from '../../services/Api';

class NewFlashCard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            open: false,
            card: {
                term: '',
                definition: ''
            }
        }
    }

    reset = () => {
        this.setState({
            open: false,
            card: {
                term: '',
                definition: ''
            }
        });
    };

    handleClickOpen = () => {
        this.setState({ open: true });
    };

    handleClose = () => {
        this.setState({ open: false });
    };

    submit = async() => {
        this.handleClose();
        await Api.post(`${this.props.location.pathname}/card`, this.state.card);
        if (this.props.newCard) {
            await this.props.newCard(this.state.card);
        }
        this.reset();
    };

    handleInputChange = text => event => {
        this.setState({
          card: {...this.state.card, [text]: event.target.value}
        });
    };

    render() {
        return (
        <div>
            <Button variant="fab" color="primary" aria-label="Add" style={{position: "fixed", right: "2em", bottom: "2em"}} onClick={this.handleClickOpen}>
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
                        onChange={this.handleInputChange('term')}
                    />
                    <TextField
                        margin="dense"
                        id="definition"
                        label="Definição"
                        multiline
                        fullWidth
                        onChange={this.handleInputChange('definition')}
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={this.handleClose} color="primary">
                        Cancelar
                    </Button>
                    <Button onClick={this.submit} color="primary">
                        Criar
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
        );
    }
}

export default NewFlashCard;