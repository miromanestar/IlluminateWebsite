import React from 'react'
import { createUseStyles } from 'react-jss'
import { Typography } from '@mui/material'
import clsx from 'clsx'

import HeaderImg from '../assets/nature-header.jpg'

const useStyles = createUseStyles(theme => ({
    root: {
        marginBottom: '150px',
        display: 'flex',
    },

    img: {
        width: '100%',
        height: '350px',
        objectFit: 'cover',
        filter: 'brightness(0.6)',
        position: 'absolute',
        top: '0',
        transition: '0.01s transform',
    },

    title: {
        position: 'absolute',
        zIndex: 100,
        color: 'white',
        top: '200px',
        width: '100%',
        textAlign: 'center',

        [theme.breakpoints.down('sm')]: {
            top: '175px',
        }
    }
}))

const Header = ({ title, titleClassName }) => {
    const classes = useStyles()

    return (
        <div className={classes.root}>
            <img
                src={HeaderImg}
                className={classes.img}
                alt="Illuminate Header"
            />
            <Typography className={clsx(titleClassName, classes.title)} variant="h2">{ title }</Typography>
        </div>
    )
}

export default Header