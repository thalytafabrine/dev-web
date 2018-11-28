import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import MenuIcon from '@material-ui/icons/Menu';
import Typography from '@material-ui/core/Typography';

class NavBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            anchorEl: null
        }
    }

    handleClick = event => {
        this.setState({ anchorEl: event.currentTarget });
    };

    handleClose = () => {
        this.setState({ anchorEl: null });
    };

    goToSubjects = () => {
        window.location.href = `http://localhost:3000/disciplina/`;
        this.handleClose();
    }

    goToStudyLists = () => {
        window.location.href = `http://localhost:3000/listaEstudo/`;
        this.handleClose();
    }

    render() {
        const { anchorEl } = this.state;

        return(
        <div>
            <AppBar position="static">
                <Toolbar>
                    <IconButton className="menuBottom" color="inherit" aria-label="Menu" onClick={this.handleClick}>
                        <MenuIcon />
                    </IconButton>
                    <Menu
                        id="simple-menu"
                        anchorEl={anchorEl}
                        open={Boolean(anchorEl)}
                        onClose={this.handleClose}
                    >
                        <MenuItem onClick={this.goToSubjects}>Disciplinas</MenuItem>
                        <MenuItem onClick={this.goToStudyLists}>Listas de estudo</MenuItem>
                        <MenuItem onClick={this.handleClose}>Logout</MenuItem>
                    </Menu>
                    <Typography variant="title" color="inherit">
                    Memorize
                    </Typography>
                </Toolbar>
            </AppBar>
        </div>
        )
    }
}

export default NavBar;