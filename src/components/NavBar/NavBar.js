import React from 'react'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu'
import Typography from '@material-ui/core/Typography'

const NavBar = () => {
    return(
        <div>
        <AppBar position="static">
            <Toolbar>
                <IconButton className="menuBottom" color="inherit" aria-label="Menu">
                    <MenuIcon />
                </IconButton>
                <Typography variant="title" color="inherit">
                Memorize
                </Typography>
            </Toolbar>
        </AppBar>
        </div>
    )
}

export default NavBar;