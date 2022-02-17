import React from 'react'
import { createUseStyles } from 'react-jss'
import {
    Paper,
    Typography
} from '@mui/material'
import clsx from 'clsx'

const useStyles = createUseStyles(theme => ({
    root: {
        borderRadius: '0.75rem !important',
        transition: '0.2s ease-in-out !important',

        '&:hover': {
            transform: 'translateX(-15px) scale(1.05)',

            [theme.breakpoints.down('md')] : {
                transform: 'scale(1.05)',
            }
        }
    },

    title: {
        textAlign: 'center',
        marginRight: '24px',
        marginLeft: '24px',
        padding: theme.spacing(2),
        borderRadius: '0.75rem !important',
        position: 'relative',
        top: '-24px',
        color: 'white !important',
        backgroundColor: `${theme.colors.primary} !important`
    },

    price: {
        textAlign: 'center',
    },

    features: {
        margin: theme.spacing(0, 4),
        padding: theme.spacing(2)
    },

    feature: {
        padding: theme.spacing(1),
        color: theme.palette.mutedText
    }
}))

const ContentCard = ({ title, price, cls, children }) => {
    const classes = useStyles()

    return (
        <Paper className={clsx(classes.root, cls)} elevation={7}>
            <Paper className={classes.title} elevation={4}>
                <Typography variant="h4">{title}</Typography>
            </Paper>
            <Typography className={classes.price} variant="h4">{price}</Typography>
            <div className={classes.features}>
                {children}
            </div>
        </Paper>
    )
}

export default ContentCard