import React, { useState } from 'react'

import {
    CssBaseline,
    Drawer,
    Hidden,
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
    makeStyles,
    Toolbar,
    useTheme,
} from '@material-ui/core'
import DynamicFeedIcon from '@material-ui/icons/DynamicFeed'
import InfoIcon from '@material-ui/icons/Info'

import constants from '../../config/constants'


const useStyles = makeStyles((theme) => ({
    drawer: {
        [theme.breakpoints.up('sm')]: {
            width: constants.drawerWidth,
            flexShrink: 0,
        },
    },
    drawerPaper: {
        width: constants.drawerWidth
    },
    drawerContainer: {
        overflow: 'auto',
    }
}))

interface Props {
    window?: () => Window
}

function SideNav(props: Props) {

    const { window } = props;
    const classes = useStyles();
    const [mobileOpen, setMobileOpen] = React.useState(false);
    const container = window !== undefined ? () => window().document.body : undefined;

    const [navItems, _setNavItems] = useState([
        {
            'title': "Feed",
            'icon': <DynamicFeedIcon />
        },
        {
            'title': "About",
            'icon': <InfoIcon />
        },

    ]);



    const drawer = (
        <div>
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
        </div>
    )

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    return (
        <div >
            <CssBaseline />

            <div className={classes.drawer} >
                <Hidden smUp implementation="css">
                    <Drawer
                        container={container}
                        variant="temporary"
                        open={mobileOpen}
                        onClose={handleDrawerToggle}
                        classes={{
                            paper: classes.drawerPaper,
                        }}
                        ModalProps={{
                            keepMounted: true,
                        }}
                    >
                        {drawer}
                    </Drawer>
                </Hidden>
                <Hidden xsDown implementation="css">
                    <Drawer
                        classes={{
                            paper: classes.drawerPaper,
                        }}
                        variant="permanent"
                        open
                    >
                        {drawer}
                    </Drawer>
                </Hidden>
            </div>
        </div>
    )
}

export default SideNav