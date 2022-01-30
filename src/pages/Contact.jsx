import React from 'react'
import { createUseStyles } from 'react-jss'
import {
    Grid,
    TextField,
    FormControl,
    FormLabel,
    FormGroup
} from '@mui/material'
import Main from '../components/Main'

import Mountain from '../assets/mountain.jpg'

const useStyles = createUseStyles(theme => ({ 
    root: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },

    container: {
        maxWidth: '1000px',
    },

    info: {
        '& img': {
            width: '100%',
            height: '100%',
            filter: 'brightness(0.7)',
        }
    },

    multiline: {
        height: '30%'
    }
}))

const Contact = () => {
    const classes = useStyles()

    return (
        <Main className={classes.root}>
            <Grid container
                className={classes.container}
                columns={{ xs: 1, md: 3 }}
                spacing={4}
            >
                <Grid item xs={1} md={1} className={classes.info}>
                    <img src={Mountain} alt="mountain" />
                </Grid>

                <Grid item 
                    xs={1} 
                    md={2} 
                    className={classes.form}
                    alignItems="center"
                    display="flex"
                >
                    <FormControl>
                        <TextField type="text" variant="standard" label="Name" />
                        <TextField type="email" variant="standard" label="Email" />
                        <FormGroup className={classes.multiline}>
                            <FormLabel>What would you like to ask us?</FormLabel>
                            <textarea></textarea>
                        </FormGroup>
                    </FormControl>
                </Grid>
            </Grid>
        </Main>
    )
}

export default Contact