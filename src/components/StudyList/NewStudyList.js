import React from 'react';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import { Api } from '../../services/Api';

class NewStudyList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            studyList: {
                name: '',
                cards: []
            },
            open: false
        }
    }

    reset = () => {
        this.setState({
            studyList: {
                name: '',
                cards: []
            },
            open: false
        });
    };

    handleChange = name => event => {
        this.setState({
            studyList: {...this.state.studyList, [name]: event.target.value}
        });
    };
  
    handleClickOpen = () => {
        this.setState({ open: true });
    };
  
    handleClose = () => {
        this.setState({ open: false });
    };

    createList = async() => {
        this.handleClose();
        await Api.post('listaEstudo', this.state.studyList);
        this.reset();
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
                <DialogTitle id="form-dialog-title">Nova Lista de Estudos</DialogTitle>
                <DialogContent>
                    <TextField
                        required
                        id="standard-name"
                        label="Nome"
                        className="textField"
                        value={this.state.name}
                        onChange={this.handleChange('name')}
                        margin="normal"
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={this.handleClose} color="primary">
                        Cancelar
                    </Button>
                    <Button 
                        onClick={this.createList} 
                        color="primary" 
                        href={`listaEstudo/${this.state.studyList._id}`}
                    >
                        Criar
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
        );
    }
}

export default NewStudyList;