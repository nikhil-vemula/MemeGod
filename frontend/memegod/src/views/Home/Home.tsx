import { Button, makeStyles, Toolbar } from '@material-ui/core';
import React, { useState } from 'react'
import Feed from '../../components/Feed/Feed'
import SideNav from '../../components/SideNav/SideNav'

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
    },
    content: {
        flexGrow: 1,
        padding: theme.spacing(3)
    },
}));

function Home() {

    let classes = useStyles()

    let [isOpen, setIsOpen] = useState(false)

    return (
        <div className={classes.root} >
            <SideNav isOpen={isOpen} setIsOpen={setIsOpen} />
            <div className={classes.content} >
                <Toolbar />
                <Feed />
                <Button variant="contained" color="primary" onClick={() => { setIsOpen(!isOpen) }} >
                    Primary
                </Button>
            </div>
        </div>
    )
}

export default Home