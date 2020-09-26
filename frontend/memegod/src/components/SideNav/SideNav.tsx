import React, { useState } from 'react'

import {
    CssBaseline,
    Drawer,
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
    makeStyles,
    Toolbar,
} from '@material-ui/core'
import DynamicFeedIcon from '@material-ui/icons/DynamicFeed'
import InfoIcon from '@material-ui/icons/Info'

const drawerWidth = 240

const useStyles = makeStyles((theme) => ({
    drawer: {
        width: drawerWidth,
        flexShrink: 0
    },
    drawerPaper: {
        width: drawerWidth,
    },
    drawerContainer: {
        overflow: 'auto',
    }
}))



function SideNav() {

    let classes = useStyles();

    let [navItems, setNavItems] = useState([
        {
            'title': "Feed",
            'icon': <DynamicFeedIcon />
        },
        {
            'title': "About",
            'icon': <InfoIcon />
        },

    ]);

    return (
        <div >
            <CssBaseline />
            <Drawer
                className={classes.drawer}
                variant="permanent"
                classes={{
                    paper: classes.drawerPaper,
                }}
            >
                <Toolbar />
                <div className={classes.drawerContainer}>
                    <List>
                        {navItems.map((item, index) => (
                            <ListItem button key={index}>
                                <ListItemIcon> {item.icon} </ListItemIcon>
                                <ListItemText primary={item.title} />
                            </ListItem>
                        ))}
                    </List>
                </div>
            </Drawer>
        </div>
    )
}

export default SideNav