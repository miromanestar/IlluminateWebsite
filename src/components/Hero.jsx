import React, { useState, useEffect } from 'react'
import { createUseStyles } from 'react-jss'
import {
    Typography,
    IconButton
} from '@mui/material'
import clsx from 'clsx'

import InstagramIcon from '@mui/icons-material/Instagram'
import FacebookIcon from '@mui/icons-material/Facebook'
import TwitterIcon from '@mui/icons-material/Twitter'
import YouTubeIcon from '@mui/icons-material/YouTube'
import LinkedInIcon from '@mui/icons-material/LinkedIn'

import { title, top_subtitle, bottom_subtitle, hero_image, show_social } from '../../content/pages/home.json'
import * as social from '../../content/meta/social.json'

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
        objectPosition: '50% 15%',
        filter: 'brightness(0.6)',
        position: 'absolute',
        transition: '0.01s transform',
    },

    container: {
        zIndex: 4,
        textAlign: 'center',
    },

    title: {
        fontWeight: 700,

        [theme.breakpoints.down('sm')]: {
            fontSize: '2.5rem !important',
        }

    },

    overline: {
        fontSize: '1.5rem',
    },

    subtitle: {
        color: theme.colors.mutedText2,
        paddingTop: '12px',

        [theme.breakpoints.down('sm')]: {
            fontSize: '1rem !important',
        }
    },

    findUs: {
        marginTop: '20px !important',
        marginBottom: '10px !important'
    },

    social: {
        '& svg': {
            color: 'white',
            transition: '.2s transform',

            '&:hover': {
                transform: 'scale(1.2)',
            }
        }
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
                src={hero_image}
                className={mobile ? classes.img : clsx(classes.img, classes.disableParallax)}
                alt="Illuminate Team"
                style={{
                    transform: `translateY(${offset * (ratio || 0.5)}px)`,
                }}
            />

            <div className={classes.container}>
                <Typography variant="overline" className={classes.overline}>{top_subtitle}</Typography>
                <Typography variant="h1" className={classes.title}>{title}</Typography>
                <Typography variant="h6" className={classes.subtitle}>{bottom_subtitle}</Typography>
                { show_social &&
                    <>
                    <Typography variant="subtitle2" className={classes.findUs}>Find us on</Typography>
                    <span className={classes.social}>
                        { social.instagram && <IconButton href={social.instagram}><InstagramIcon /></IconButton> }
                        { social.facebook && <IconButton href={social.facebook}><FacebookIcon /></IconButton> }
                        { social.twitter && <IconButton href={social.twitter}><TwitterIcon /></IconButton> }
                        { social.youtube && <IconButton href={social.youtube}><YouTubeIcon /></IconButton> }
                        { social.linkedin && <IconButton href={social.linkedin}><LinkedInIcon /></IconButton> }
                    </span>
                    </>
                }
            </div>
        </div>
    )
}

export default Hero