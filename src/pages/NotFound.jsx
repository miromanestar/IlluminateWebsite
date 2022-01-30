import React from 'react'
import { createUseStyles } from 'react-jss'
import Main from '../components/Main'
import Header from '../components/Header'

const useStyles = createUseStyles(theme => ({ 
    root: {
        padding: '16px',
        borderRadius: '0.75rem',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center'
    }
}))

const NotFound = () => {
    const classes = useStyles()

    return (
        <>
        <Header title="Not Found" />
        <Main className={classes.root}>
            <h1>Uh oh! The page you were looking for doesn't exist.</h1>
        </Main>
        </>
    )
}

export default NotFound