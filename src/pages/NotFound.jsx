import React from 'react'
import { createUseStyles } from 'react-jss'

const useStyles = createUseStyles(theme => ({ 
    root: {
        position: 'relative',
        backgroundColor: 'white',
        minHeight: '20vh',
        width: '97%',
        boxShadow: 'rgb(0 0 0 / 5%) 0rem 1.25rem 1.6875rem 0rem',
        margin: '0 auto',
        padding: '16px',
        borderRadius: '0.75rem',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    }
}))

const NotFound = () => {
    const classes = useStyles()

    return (
        <div className={classes.root}>
            <h1>Uh oh! The page you were looking for doesn't exist.</h1>
        </div>
    )
}

export default NotFound