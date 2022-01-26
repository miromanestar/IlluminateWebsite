import React from 'react'
import { createUseStyles } from 'react-jss'

import HeroImg from '../assets/hero.jpg'

const useStyles = createUseStyles(theme => ({
    root: {
        width: '100%',
        height: '75vh',
        marginTop: '-100px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        color: 'white'
    },

    img: {
        width: '100%',
        height: '75vh',
        objectFit: 'cover',
        filter: 'brightness(0.5)',
        position: 'absolute',
    },

    container: {
        zIndex: 4
    },

    enactus: {
        height: '5rem',
    }
}))

const Hero = () => {
    const classes = useStyles()

    return (
        <div className={classes.root}>
            <img src={HeroImg} className={classes.img} alt="Illuminate Team" />

            <div className={classes.container}>
                <h1>Illuminate Marketing</h1>
                <h3>PLACEHOLDER</h3>
            </div>
        </div>
    )
}

export default Hero