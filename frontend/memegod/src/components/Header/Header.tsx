import React from "react";

import AppBar from "@material-ui/core/AppBar/AppBar";
import Toolbar from "@material-ui/core/Toolbar/Toolbar";
import Typography from "@material-ui/core/Typography/Typography";
import SearchIcon from "@material-ui/icons/Search";
import { fade, InputBase, makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    appBar: {
        [theme.breakpoints.up('sm')]: {
            zIndex: theme.zIndex.drawer + 1,
        },
    },
    title: {
        flexGrow: 1,
    },
    search: {
        flexGrow: 1,
        position: 'relative',
        borderRadius: theme.shape.borderRadius,
        backgroundColor: fade(theme.palette.common.white, 0.15),
        '&:hover': {
            backgroundColor: fade(theme.palette.common.white, 0.25),
        },
        [theme.breakpoints.up('sm')]: {
            marginLeft: theme.spacing(1),
        },
    },
    searchIcon: {
        padding: theme.spacing(0, 2),
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    inputRoot: {
        width: '100%',
        color: 'inherit',
    },
    inputInput: {
        flexGrow: 2,
        padding: theme.spacing(1, 1, 1, 0),
        paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            width: '10ch',
            '&:focus': {
                width: '12ch',
            },
        },
    },
    right: {
        flexGrow: 1
    }
}));



function Header() {

    const classes = useStyles();

    return (
        <div className={classes.root} >
            <AppBar position="fixed" className={classes.appBar} >
                <Toolbar>
                    <Typography className={classes.title} variant="h6" noWrap>MemeGod</Typography>
                    <div className={classes.search}>
                        <div className={classes.searchIcon}>
                            <SearchIcon />
                        </div>
                        <InputBase
                            placeholder="Search…"
                            classes={{
                                root: classes.inputRoot,
                                input: classes.inputInput,
                            }}
                            inputProps={{ 'aria-label': 'search' }}
                        />
                    </div>
                    <div className={classes.right}>

                    </div>
                </Toolbar>
            </AppBar>
        </div>
    );
}

export default Header;
