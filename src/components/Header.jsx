import React, { useState } from 'react'
import { createUseStyles } from 'react-jss'

import HeaderImg from '../assets/nature-header.jpg'

const useStyles = createUseStyles(theme => ({
    root: {
        marginBottom: '200px',
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
}))

const Header = () => {
    const classes = useStyles()

    return (
        <div className={classes.root}>
            <img
                src={HeaderImg}
                className={classes.img}
                alt="Illuminate Header"
            />
        </div>
    )
}

export default Header