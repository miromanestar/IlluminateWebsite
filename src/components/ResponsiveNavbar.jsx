import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { createUseStyles } from 'react-jss';
import clsx from 'clsx';
import {
    Box,
    Toolbar,
    IconButton,
    Typography,
    Menu
} from '@mui/material'
import { debounce } from '../tools/debounce'

import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';

import LogoImg from '../assets/logo.png'

const useStyles = createUseStyles((theme) => ({
    root: {
        position: 'sticky',
        top: 20,
        zIndex: 999,
        transition: 'top 0.6s ease-in-out',
        marginBottom: '50px'
    },

    hide: {
        top: -100
    },

    blur: {
        backdropFilter: 'blur(4px)',
        backgroundColor: 'rgba(0, 0, 0, 0.6) !important',
        borderRadius: '0.75rem',
        boxShadow: theme.boxShadows.light,
        width: '90% !important'
    },

    toolbar: {
        justifyContent: 'space-between !important',
    },

    menu: {
        borderRadius: '10px !important',
        backdropFilter: 'blur(4px)',
        backgroundColor: 'rgba(0, 0, 0, 0.6) !important',
        transform: 'translateY(15px) !important'
    },

    logo: {
        display: 'flex',
        alignItems: 'center',
        textDecoration: 'none',
        color: 'white',
        padding: '10px',
        margin: '5px',
        transition: '.2s',
        borderRadius: '10px',

        '& img': {
            width: '50px',
        },

        '& div': {
            fontSize: '1.5rem',
            fontWeight: 'bold',
            marginLeft: '10px',
        },

        [theme.breakpoints.down('sm')]: {
            padding: 0
        },

        '&:hover': {
            backgroundColor: 'rgba(255, 255, 255, 0.2)',
            transform: 'scale(0.95)',
            boxShadow: theme.boxShadows.light,
        },
    },

    button: {
        backgroundColor: theme.colors.primary + ' !important',
        margin: '0 10px !important',
        borderRadius: '10px !important',
        padding: '10px 20px !important',
        fontWeight: 'bold',
        textDecoration: 'none',
        color: 'white !important',
        transition: 'transform .2s, filter .2s, box-shadow .2s !important',

        '&:hover': {
            transform: 'translateY(-1px)',
            filter: 'brightness(0.95)',
            boxShadow: theme.boxShadows.light
        },

        '&:active': {
            transform: 'translate3d(0, -10%, 0)'
        }
    }
}))

const pages = [
    {
        name: 'Home',
        route: '/'
    },
    {
        name: 'About',
        route: '/about'
    },
    {
        name: 'Pricing',
        route: '/pricing'
    },
    {
        name: 'Contact',
        route: '/contact'
    },
    {
        name: 'Donate',
        route: '/donate'
    }
]

const ResponsiveNavbar = () => {
    const classes = useStyles()
    const navigate = useNavigate()

    const [anchorElNav, setAnchorElNav] = React.useState(null)
    const [prevScrollPos, setPrevScrollPos] = useState(0);
    const [visible, setVisible] = useState(true)

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget)
    }

    const handleCloseNavMenu = (route) => {
        navigate(route)
        setAnchorElNav(null)
    }

    const handleScroll = debounce(() => {
        const currentScrollPos = window.pageYOffset;

        setVisible((prevScrollPos > currentScrollPos && prevScrollPos - currentScrollPos > 70) || currentScrollPos < 10);
        setPrevScrollPos(currentScrollPos);
    }, 100)

    useEffect(() => {
        window.addEventListener('scroll', handleScroll)

        return () => window.removeEventListener('scroll', handleScroll)

    }, [prevScrollPos, visible, handleScroll])

    return (
        <div className={classes.root}>
            <Container className={classes.blur} maxWidth="xl">
                <Toolbar className={classes.toolbar} disableGutters>
                    <Link
                        className={classes.logo}
                        style={{ display: { xs: 'none', md: 'flex' } }}
                        to="/"
                    >
                        <img src={LogoImg} alt="" />
                        <Typography
                            variant="h6"
                            noWrap
                            component="div"
                            sx={{ mr: 2 }}
                        >
                            Illuminate
                        </Typography>
                    </Link>

                    <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' }, justifyContent: 'flex-end' }}>
                        <IconButton
                            size="large"
                            aria-label="navigation menu"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleOpenNavMenu}
                            color="inherit"
                        >
                            <MenuIcon style={{ color: 'white' }} />
                        </IconButton>

                        <Menu
                            id="menu-appbar"
                            anchorEl={anchorElNav}
                            anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'left',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'left',
                            }}
                            open={Boolean(anchorElNav)}
                            onClose={handleCloseNavMenu}
                            sx={{
                                display: { xs: 'block', md: 'none' }
                            }}
                            PaperProps={{ className: classes.menu }}
                        >
                            {pages.map((page) => (
                                <MenuItem key={page.name} className={classes.button} sx={{ margin: '10px 10px !important', justifyContent: 'center' }} onClick={() => handleCloseNavMenu(page.route)}>
                                    <Typography textAlign="center">{page.name}</Typography>
                                </MenuItem>
                            ))}
                        </Menu>
                    </Box>

                    <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
                        {pages.map((page) => (
                            <Button
                                className={classes.button}
                                key={page.name}
                                onClick={() => handleCloseNavMenu(page.route)}
                            >
                                {page.name}
                            </Button>
                        ))}
                    </Box>
                </Toolbar>
            </Container>
        </div>
    );
};
export default ResponsiveNavbar;