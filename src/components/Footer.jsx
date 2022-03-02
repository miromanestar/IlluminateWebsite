import React from 'react'
import {
    IconButton
} from '@mui/material'
import { createUseStyles } from 'react-jss'

import InstagramIcon from '@mui/icons-material/Instagram'
import FacebookIcon from '@mui/icons-material/Facebook'
import TwitterIcon from '@mui/icons-material/Twitter'
import YouTubeIcon from '@mui/icons-material/YouTube'
import LinkedInIcon from '@mui/icons-material/LinkedIn'

import * as social from '../../content/meta/social.json'

const useStyles = createUseStyles(theme => ({ 
    root: {
        position: 'sticky',
        top: '100%',
        width: '100%',
        height: '60px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',

        [theme.breakpoints.down('md')]: {
            flexWrap: 'wrap'
        }
    },

    social: {
        position: 'absolute',
        left: '20px',

        '& a': {
            backgroundColor: theme.colors.primary,
            color: 'mutedText',
            marginRight: '10px',
            transition: '.2s',

            '&:hover': {
                transform: 'translateY(-1px)',
                backgroundColor: theme.colors.primary,
                filter: 'brightness(0.95)',
                boxShadow: theme.boxShadows.light
            },
        },

        [theme.breakpoints.down('md')]: {
            position: 'relative',
            paddingBottom: '5px',
            paddingTop: '10px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            left: 0,
        },
    },

    copyright: {
        [theme.breakpoints.down('md')]: {
            width: '100%',
            textAlign: 'center',
            marginBottom: '10px',
        }
    }
}))

const Footer = () => {
    const classes = useStyles()
    const show_social = true
    return (
        <div className={classes.root}>
            { show_social &&
                <>
                <div className={classes.social}>
                    { social.instagram && <IconButton href={social.instagram}><InstagramIcon /></IconButton> }
                    { social.facebook && <IconButton href={social.facebook}><FacebookIcon /></IconButton> }
                    { social.twitter && <IconButton href={social.twitter}><TwitterIcon /></IconButton> }
                    { social.youtube && <IconButton href={social.youtube}><YouTubeIcon /></IconButton> }
                    { social.linkedin && <IconButton href={social.linkedin}><LinkedInIcon /></IconButton> }
                </div>
                </>
            }
            <div className={classes.copyright}>
                Copyright &copy; 2022 Illuminate SAU
            </div>
        </div>
    )
}

export default Footer