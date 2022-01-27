import React from 'react'
import { createUseStyles } from 'react-jss'
import { 
    Paper,
    Box,
    Typography,
    Grid
} from '@mui/material'

const useStyles = createUseStyles(theme => ({ 
    root: {
        borderRadius: '0.75rem !important',
        boxShadow: theme.boxShadows.light
    },

    img: {
        height: '100%',

        '& div': {
            margin: '-48px 0 0',
            padding: '16px 16px 8px',
        },

        '& img': {
            borderRadius: '0.75rem',
            width: '100%',
            height: '100%',
            boxShadow: theme.boxShadows.light,
        }
    },

    info: {
        padding: theme.spacing(2),
    },

    subtitle: {
        color: theme.colors.primary,
        fontWeight: 'bold',
        marginBottom: '8px !important',
    },

    description: {
        color: theme.colors.mutedText
    },
}))

const PersonCard = ( {person }) => {
    const classes = useStyles()

    return (
        <Paper className={classes.root} elevation={9}>
            <Grid container
                columns={{ xs: 1, sm: 2 }}
            >
                <Grid item
                    className={classes.img}
                    xs={1}
                    sm={1}
                >
                    <div>
                        <img src={person.photo} alt={person.name} />
                    </div>
                </Grid>
                <Grid item container
                    xs={1}
                    sm={1}
                    direction="column"
                    justifyContent="center"
                >
                    <Box className={classes.info}>
                        <Typography className={classes.name} variant="h5">{person.name}</Typography>
                        <Typography className={classes.subtitle} variant="h6">{person.title}</Typography>
                        <Typography className={classes.description} variant="body1">{person.desc}</Typography>
                    </Box>
                </Grid>
            </Grid>
        </Paper>
    )
}

export default PersonCard