import React from 'react'
import { createUseStyles } from 'react-jss'

const useStyles = createUseStyles(theme => ({ 
    root: {
        position: 'relative',
        width: '100%',
        height: '60px',
        bottom: 0,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    }
}))

const Footer = () => {
    const classes = useStyles()

    return (
        <div className={classes.root}>
            Copyright &copy; 2022 Illuminate @ Enactus
        </div>
    )
}

export default Footer