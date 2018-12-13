import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Menu from '@material-ui/core/Menu';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import MenuItem from '@material-ui/core/MenuItem';
import MenuIcon from '@material-ui/icons/Menu';
import Typography from '@material-ui/core/Typography';
import SubjectIcon from '@material-ui/icons/Subject';
import BookIcon from '@material-ui/icons/Book';
import PersonIcon from '@material-ui/icons/Person';

class NavBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            anchorEl: null,
            left: false
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

    toggleDrawer = (side, open) => () => {
        this.setState({
          [side]: open,
        });
    }

    render() {
        const { anchorEl } = this.state;

        const sideList = (
            <div className="list">
                <List>
                    <ListItem button key={"Disciplinas"} onClick={this.goToSubjects}>
                        <ListItemIcon><BookIcon /></ListItemIcon>
                        <ListItemText primary={"Disciplinas"} />
                    </ListItem>
                    <ListItem button key={"Listas de Estudo"} onClick={this.goToStudyLists}>
                        <ListItemIcon><SubjectIcon /></ListItemIcon>
                        <ListItemText primary={"Listas de Estudo"} />
                    </ListItem>
                    <ListItem button key={"Logout"}>
                        <ListItemIcon><PersonIcon /></ListItemIcon>
                        <ListItemText primary={"Logout"} />
                    </ListItem>
                </List>
                <Divider />
            </div>
        );

        return(
        <div>
            <Drawer open={this.state.left} onClose={this.toggleDrawer('left', false)}>
            <div
                tabIndex={0}
                role="button"
                onClick={this.toggleDrawer('left', false)}
                onKeyDown={this.toggleDrawer('left', false)}
            >
                {sideList}
            </div>
            </Drawer>
            <AppBar position="static">
                <Toolbar>
                    {/* onClick={this.toggleDrawer('left', true) || this.handleClick */}
                    <IconButton className="menuBottom" color="inherit" aria-label="Menu" onClick={this.toggleDrawer('left', true)}>
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