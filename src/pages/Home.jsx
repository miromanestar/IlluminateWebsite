import React from 'react'
import { createUseStyles } from 'react-jss'
import Hero from '../components/Hero'

const useStyles = createUseStyles(theme => ({ 
    root: {
        backgroundColor: theme.colors.mutedWhite,
    },

    container: {
        position: 'relative',
        backgroundColor: 'white',
        minHeight: '20vh',
        width: '97%',
        boxShadow: 'rgb(0 0 0 / 5%) 0rem 1.25rem 1.6875rem 0rem',
        margin: '0 auto',
        marginTop: '-60px',
        padding: '16px',
        borderRadius: '0.75rem',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    }
}))

const App = () => {
    const classes = useStyles()

    return (
        <div className={classes.root}>
            <Hero />

            <div className={classes.container}>
                <h1>Hello World</h1>
            </div>
        </div>
    )
}

export default App