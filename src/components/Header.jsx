import React from 'react'
import { Link } from 'react-router-dom'
import { createUseStyles } from 'react-jss'

import LogoImg from '../assets/logo.png'

const useStyles = createUseStyles(theme => ({
    root: {
        position: 'sticky',
        width: '100%',
        height: '100px',
        color: 'white',
        zIndex: 999,
    },

    container: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: '0 20%',
        height: '100%'
    },

    logo: {
        padding: '20px',
        margin: '5px',
        display: 'flex',
        alignItems: 'center',
        textDecoration: 'none',
        color: 'white',
        transition: '.2s',
        borderRadius: '0.75rem',

        '&:hover': {
            backgroundColor: 'white',
            color: theme.colors.mutedText,
            margin: '10px',
            boxShadow: '0 7px 14px rgb(50 50 93 / 10%), 0 3px 6px rgb(0 0 0 / 8%)',
        },

        '& span': {
            fontSize: '1.5rem',
            fontWeight: 'bold',
            marginLeft: '10px',
        }
    },

    menu: {
        display: 'flex',
        alignItems: 'center',
    },

    button: {
        backgroundColor: theme.colors.primary,
        padding: '10px 20px',
        margin: '0 10px',
        borderRadius: '10px',
        fontWeight: 'bold',
        textDecoration: 'none',
        color: 'white',
        transition: '.2s',

        '&:hover': { 
            transform: 'translateY(-1px)',
            filter: 'brightness(0.95)',
            boxShadow: '0 7px 14px rgb(50 50 93 / 10%), 0 3px 6px rgb(0 0 0 / 8%)'
        },

        '&:active': {
            transform: 'translate3d(0, -10%, 0)'
        }
    }
}))

const Header = () => {
    const classes = useStyles()

    return (
        <div className={classes.root}>
            <div className={classes.container}>
                <Link className={classes.logo} to='/'>
                    <img src={LogoImg} style={{ width: '100%', height: '100%'}} alt="Illuminate Team" />
                    <span>Illuminate</span>
                </Link>
                <div className={classes.menu}>
                    <Link className={classes.button} to='/'>Home</Link>
                    <Link className={classes.button} to='/about'>About</Link>
                    <Link className={classes.button} to='/pricing'>Pricing</Link>
                    <Link className={classes.button} to='/contact'>Contact</Link>
                </div>
            </div>
        </div>
    )
}

export default Header