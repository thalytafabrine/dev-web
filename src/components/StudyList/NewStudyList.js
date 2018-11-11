import React from 'react';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import MenuItem from '@material-ui/core/MenuItem';

const subjects = [
    {
        value: 'None',
        label: 'None',
    },
    {
        value: 'Subj1',
        label: 'Subj1',
    },
    {
        value: 'Subj2',
        label: 'Subj2',
    },
    {
        value: 'Subj3',
        label: 'Subj3',
    },
    {
        value: 'Subj4',
        label: 'Subj4',
    },
    {
        value: 'Subj5',
        label: 'Subj5',
    },
    {
        value: 'Subj6',
        label: 'Subj6',
    }
];

class NewStudyList extends React.Component {
    state = {
        name: 'Cat in the Hat',
        currency: 'None',
        open: false
    };

    handleChange = name => event => {
        this.setState({
            [name]: event.target.value,
        });
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
                  <TextField
                      id="standard-select-currency"
                      select
                      label="Disciplina"
                      className="textField"
                      value={this.state.currency}
                      onChange={this.handleChange('currency')}
                      SelectProps={{
                          MenuProps: {
                              className: "menu",
                          },
                      }}
                      margin="normal"
                  >
                      {subjects.map(option => (
                          <MenuItem key={option.value} value={option.value}>
                              {option.label}
                          </MenuItem>
                      ))}
                  </TextField>
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

export default NewStudyList;