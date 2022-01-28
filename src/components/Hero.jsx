import React, { useState, useEffect } from 'react'
import { createUseStyles } from 'react-jss'
import clsx from 'clsx'

import HeroImg from '../assets/hero.jpg'

const useStyles = createUseStyles(theme => ({
    root: {
        width: '100%',
        height: '75vh',
        marginTop: '-150px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        color: 'white',
    },

    img: {
        width: '100%',
        height: '75vh',
        objectFit: 'cover',
        filter: 'brightness(0.5)',
        position: 'absolute',
        transition: '0.01s transform',
    },

    container: {
        zIndex: 4
    },

    enactus: {
        height: '5rem',
    },

    disableParallax: {
        [theme.breakpoints.down('md')]: { 
            transform: 'none !important' 
        }
    }
}))

const Hero = ({ parallax, ratio, mobile }) => {
    const classes = useStyles()
    const [offset, setOffset] = useState(0)

    useEffect(() => {
        
        if (!parallax)
            return

        const handleScroll = () => {
            setOffset(window.pageYOffset)
        }

        window.addEventListener('scroll', handleScroll)

        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [offset])

    return (
        <div className={classes.root}>
            <img
                src={HeroImg} 
                className={mobile ? classes.img : clsx(classes.img, classes.disableParallax)}
                alt="Illuminate Team" 
                style={{
                    transform: `translateY(${offset * (ratio || 0.5)}px)`,
                }}
            />

            <div className={classes.container}>
                <h1>Illuminate Marketing</h1>
                <h3>PLACEHOLDER</h3>
            </div>
        </div>
    )
}

export default Hero