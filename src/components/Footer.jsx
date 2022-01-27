import React from 'react'
import { createUseStyles } from 'react-jss'

const useStyles = createUseStyles(theme => ({ 
    root: {
        position: 'sticky',
        top: '100%',
        width: '100%',
        height: '60px',
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