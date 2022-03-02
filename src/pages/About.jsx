import React from 'react'
import { createUseStyles } from 'react-jss'
import {
    Grid
} from '@mui/material'
import Header from '../components/Header'
import Main from '../components/Main'
import ContentCard from '../components/ContentCard'

import * as DATA from '../../content/pages/about.json'

const useStyles = createUseStyles(theme => ({ 
    container: {

        '& h3': {
            color: theme.colors.primary,
            textAlign: 'center',
        }
    },

    section: {
        display: 'flex',
        justifyContent: 'center',
        padding: '45px 16px',

        '& div': {
            maxWidth: '75ch',
        }
    },

    images: {
        '& img': {
            height: '200px',
            borderRadius: '0.75rem',
            boxShadow: theme.boxShadows.dark
        }
    },

    imageContainer: {
        width: 'fit-content',
    },

    imgDesc: {
        textAlign: 'center'
    },

    responsive: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '90px 16px',

        [theme.breakpoints.down('md')]: {
            padding: '45px 16px',
        },
    },

    contentCard: {
        background: theme.colors.darkGradient,
        color: 'white !important',

        '& h4': {
            fontSize: '1.5rem',
            color: theme.colors.mutedText2,
            padding: theme.spacing(0, 5)
        }
    }
}))

const About = () => {
    const classes = useStyles()

    return (
        <div className={classes.root}>
        <Header title={'About'} />
        <Main className={classes.container}>
            <section className={classes.responsive}>
                <Grid 
                    container
                    columns={{ xs: 1, md: 2}}
                    spacing={{ xs: 8, md: 2 }}
                    columnSpacing={{ md: 16}}
                >
                    <Grid container item
                        xs={1} md={1}
                    >
                        <div className={classes.images}>
                            {
                                DATA.images.map((image, index) => (
                                    <div className={classes.imageContainer}>
                                        <img 
                                            key={`about-img-${index}`} 
                                            src={image.image} 
                                            alt={image.description}
                                        />
                                        <div className={classes.imgDesc}>{image.description}</div>
                                    </div>
                                ))
                            }
                        </div>
                    </Grid>
                    <Grid 
                        container item
                        className={classes.info}
                        columns={{ xs: 1, md: 2 }}
                        xs={1} md={1}
                    >
                        <ContentCard
                            title={DATA.title}
                            subtitle={DATA.subtitle}
                            cls={classes.contentCard}
                        >
                            {DATA.content}
                        </ContentCard>
                    </Grid>
                </Grid>
            </section>
        </Main>
        </div>
    )
}

export default About