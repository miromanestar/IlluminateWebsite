import React from 'react'
import { createUseStyles } from 'react-jss'
import {
    Typography,
    Grid,
    TextField,
    FormControl,
    Button
} from '@mui/material'
import Main from '../components/Main'
import Header from '../components/Header'

import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import Mountain from '../assets/mountain.jpg'

const useStyles = createUseStyles(theme => ({ 
    root: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '16px 0'
    },

    container: {
        maxWidth: '1000px',
    },

    info: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },

    imgContainer: {
        position: 'relative',

        '& img': {
            display: 'block',
            width: '100%',
            height: '100%',
            borderRadius: '0.75rem',
        }
    },

    gradient: {
        position: 'absolute',
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        background: 'linear-gradient(195deg,#42424a,#191919)',
        backgroundSize: 'cover',
        opacity: '0.8',
        borderRadius: '0.75rem',
    },

    multiline: {
        height: '30%'
    },

    infoText: {
        position: 'absolute',
        color: 'white',

        '& h5': {
            marginBottom: '10px',
        }
    },

    contact: {
        display: 'flex',
        alignItems: 'center',
        gap: '10px',
        paddingBottom: '10px'
    },

    form: {
        margin: '16px',
        width: '100%',

        '& h5': {
            margin: '0 20px'
        },

        '& div': {
            margin: '5px 10px',
        },

        '& button': {
            width: 'fit-content',
            margin: '5px 20px',
            marginLeft: 'auto',
        },
    }
}))

const Contact = () => {
    const classes = useStyles()

    return (
        <>
        <Header title="Contact Us" />
        <Main className={classes.root}>
            <Grid container
                className={classes.container}
                columns={{ xs: 1, md: 3 }}
                spacing={4}
            >
                <Grid item xs={1} md={1} className={classes.info}>
                    <div className={classes.imgContainer}>
                        <img src={Mountain} alt="mountain" />
                        <div className={classes.gradient} />
                    </div>
                    <div className={classes.infoText}>
                        <Typography variant="h5">Contact Information</Typography>
                        <Typography className={classes.contact} variant="subtitle1"><PhoneIcon />666-666-0666</Typography>
                        <Typography className={classes.contact} variant="subtitle1"><EmailIcon />contact@illuminatesau.com</Typography>
                    </div>
                </Grid>

                <Grid item container
                    xs={1} 
                    md={2}
                    direction="column"
                    alignItems="center"
                    justifyContent="center"
                >
                    <FormControl className={classes.form}>
                        <Typography variant="h5">We'd love to hear from you!</Typography>
                        <TextField type="text" variant="filled" label="Name" />
                        <TextField type="text" variant="filled" label="Email" />
                        <TextField multiline variant="filled" label="Message" />
                        <Button variant="contained">Submit</Button>
                    </FormControl>
                </Grid>
            </Grid>
        </Main>
        </>
    )
}

export default Contact