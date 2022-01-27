import * as React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { createUseStyles } from 'react-jss';
import {
    Box,
    Toolbar,
    IconButton,
    Typography,
    Menu
} from '@mui/material'

import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';

import LogoImg from '../assets/logo.png'

const useStyles = createUseStyles((theme) => ({
    root: {
        position: 'sticky',
        zIndex: 999,
    },

    toolbar: {
        justifyContent: 'space-between !important',
    },

    menu: {
        borderRadius: '10px !important'
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
            boxShadow: '0 7px 14px rgb(50 50 93 / 10%), 0 3px 6px rgb(0 0 0 / 8%)',
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
            boxShadow: '0 7px 14px rgb(50 50 93 / 10%), 0 3px 6px rgb(0 0 0 / 8%)'
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
];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

const ResponsiveNavbar = () => {
    const classes = useStyles()
    const navigate = useNavigate()

    const [anchorElNav, setAnchorElNav] = React.useState(null);
    const [anchorElUser, setAnchorElUser] = React.useState(null);

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };
    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseNavMenu = (route) => {
        navigate(route)
        setAnchorElNav(null);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };

    return (
        <div className={classes.root}>
            <Container maxWidth="xl">
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