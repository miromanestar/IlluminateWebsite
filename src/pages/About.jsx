import React from 'react'
import { createUseStyles } from 'react-jss'
import {
    Typography
} from '@mui/material'
import Header from '../components/Header'
import Main from '../components/Main'

import * as DATA from '../../content/pages/about.json'
const sections = DATA.sections || []

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
    }
}))

const About = () => {
    const classes = useStyles()

    return (
        <div className={classes.root}>
        <Header title={'About'} />
        <Main className={classes.container}>
            {
                sections.map((section, index) => 
                    <section className={classes.section} key={`section_${ index }`}>
                        <div>
                            <Typography variant="h3">{section.title}</Typography>
                            <Typography variant="h5" sx={{ textAlign: section.text_align }}>{section.description}</Typography>
                        </div>
                    </section>
                )
            }
        </Main>
        </div>
    )
}

export default About