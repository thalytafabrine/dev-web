import React, { Component } from 'react';
import * as firebase from 'firebase';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import MenuIcon from '@material-ui/icons/Menu';
import Typography from '@material-ui/core/Typography';
import SubjectIcon from '@material-ui/icons/Subject';
import BookIcon from '@material-ui/icons/Book';
import PersonIcon from '@material-ui/icons/Person';
import './NavBar.css';

class NavBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            left: false
        }
    }

    goToSubjects = () => {
        window.location.href = `http://localhost:3000/disciplina/`;
    }

    goToStudyLists = () => {
        window.location.href = `http://localhost:3000/listaEstudo/`;
    }

    toggleDrawer = (side, open) => () => {
        this.setState({
          [side]: open,
        });
    }

    logout = () => {
        firebase.auth().signOut();
        window.location.href=`http://localhost:3000/`;
    }

    render() {

        const sideList = (
            <div className="list">
                <List>
                    <ListItem button key={"Disciplinas"} onClick={this.goToSubjects}>
                        <ListItemIcon><BookIcon /></ListItemIcon>
                        <ListItemText primary={"Disciplinas"} />
                    </ListItem>
                    <Divider inset/>
                    <ListItem button key={"Listas de Estudo"} onClick={this.goToStudyLists}>
                        <ListItemIcon><SubjectIcon /></ListItemIcon>
                        <ListItemText primary={"Listas de Estudo"} />
                    </ListItem>
                    <Divider inset />
                    <ListItem button key={"Logout"} onClick={this.logout}>
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
            <Typography variant="overline" className="footer" style={{fontSize: 8.75}}>
                Desenvolvido por <a href="https://github.com/thalytafabrine">Thalyta Fabrine</a> 
            </Typography>
            </Drawer>
            <AppBar position="static">
                <Toolbar>
                    {this.props.auth && (
                    <div>
                        <IconButton className="menuBottom" color="inherit" aria-label="Menu" onClick={this.toggleDrawer('left', true)}>
                            <MenuIcon />
                        </IconButton>
                    </div>
                    )}
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