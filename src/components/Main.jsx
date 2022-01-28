import React from 'react'
import { createUseStyles } from 'react-jss'
import clsx from 'clsx'

const useStyles = createUseStyles(theme => ({ 
    root: {
        position: 'relative',
        backgroundColor: 'white',
        minHeight: '20vh',
        width: '97%',
        boxShadow: theme.boxShadows.feather,
        margin: '0 auto',
        borderRadius: '0.75rem',

        [theme.breakpoints.down('md')]: {
            width: '92%',
        }
    }
}))

const Main = ({ children, className, style, ...rest }) => {
    const classes = useStyles()

    return (
        <div className={clsx(className, classes.root)} style={style} {...rest}>
            {children}
        </div>
    )
}

export default Main