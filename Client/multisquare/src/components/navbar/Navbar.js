import React from 'react';
import { AppBar, Toolbar, IconButton, Badge, Menu, MenuItem, Typography} from '@material-ui/core';
import { ShoppingCart } from '@material-ui/icons';
import useStyles from './navbarstyles';

const Navbar = () => {
    const classes = useStyles();
    return (
        <>
            <AppBar position="fixed" className={classes.appBar} color="inherit">
                <Toolbar>
                    <Typography variant="h6" className={classes.title} color="inherit">
                        <img src="https://st2.depositphotos.com/2567911/45740/v/380/depositphotos_457400426-stock-illustration-abstract-pixelized-mosaic-logo-design.jpg" alt="MultiSquare" height="25px" className={classes.image}/>
                        MultiSquare
                    </Typography>
                    <div className={classes.grow} />
                    <div className={classes.button}>
                        <IconButton aria-label="Show cart items" color="inherit">
                            <Badge badgeContent={2} color="secondary">
                                <ShoppingCart/>
                            </Badge>
                        </IconButton>
                    </div>
                </Toolbar>
            </AppBar>  
        </>
    )
}

export default Navbar
