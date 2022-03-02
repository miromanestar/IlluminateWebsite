import React from 'react'
import { createUseStyles } from 'react-jss'
import {
    Paper,
    Icon,
    Typography
} from '@mui/material'
import clsx from 'clsx'

const useStyles = createUseStyles(theme => ({
    root: {
        borderRadius: '0.75rem !important',
        display: 'flex',
        padding: theme.spacing(2),
        gap: '16px',
        backgroundColor: `${theme.colors.primary} !important`,
        color: 'white !important',
    },

    subtitle: {
        fontWeight: 'bold',
    },

    icon: {
        fontSize: '3rem !important'
    }
}))

const ContentCard = ({ title, subtitle, description, action, icon, cls }) => {
    const classes = useStyles()

    return (
        <Paper className={clsx(classes.root, cls)} elevation={7}>
            <Icon className={classes.icon}>{icon}</Icon>
            <div className={classes.content}>
                <Typography variant="h6" className={classes.title}>{title}</Typography>
                <Typography variant="body1" className={classes.subtitle}>{subtitle}</Typography>
                <Typography variant="subtitle1" className={classes.desc}>{description}</Typography>
            </div>
        </Paper>
    )
}

export default ContentCard