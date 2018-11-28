import React, {Component} from 'react';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import { Api } from '../../services/Api';

class NewSubject extends Component {
    constructor(props) {
        super(props);
        this.state = {
            subject: {
                name: '',
                teacher: '',
                studyLists: []
            },
            open: false
        }
    }

    reset = () => {
        this.setState({
            subject: {
                name: '',
                teacher: '',
                studyLists: []
            },
            open: false
        });
    };

    handleChange = name => event => {
        this.setState({
            subject: {...this.state.subject, [name]: event.target.value}
        });
    };
  
    handleClickOpen = () => {
        this.setState({ open: true });
    };
  
    handleClose = () => {
        this.setState({ open: false });
    };

    createSubject = async() => {
        this.handleClose();
        await Api.post('disciplina', this.state.subject);
        this.reset();
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
                <DialogTitle id="form-dialog-title">Nova Disciplina</DialogTitle>
                <DialogContent>
                    <TextField
                        required
                        id="subject-name"
                        label="Nome"
                        className="textField"
                        value={this.state.name}
                        onChange={this.handleChange('name')}
                        margin="normal"
                    />
                </DialogContent>
                <DialogContent>
                    <TextField
                        required
                        id="subject-teacher"
                        label="Professor(a)"
                        className="textField"
                        value={this.state.teacher}
                        onChange={this.handleChange('teacher')}
                        margin="normal"
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={this.handleClose} color="primary">
                        Cancelar
                    </Button>
                    <Button 
                        onClick={this.createSubject} 
                        color="primary" 
                        href={`disciplina/${this.state.subject._id}`}
                    >
                        Criar
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
        );
    }
}

export default NewSubject;