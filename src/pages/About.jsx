import React from 'react'
import { createUseStyles } from 'react-jss'
import {
    Typography
} from '@mui/material'
import Header from '../components/Header'
import Main from '../components/Main'

const useStyles = createUseStyles(theme => ({ 
    root: {

    },
    
    container: {

        '& h1': {
            color: theme.colors.primary,
            textAlign: 'center',

            [theme.breakpoints.down('sm')]: {
                fontSize: '4.5rem !important',
            }
        }
    },

    mission: {
        display: 'flex',
        justifyContent: 'center',
        padding: '45px 16px',

        '& div': {
            maxWidth: '1200px'
        }
    }
}))

const About = () => {
    const classes = useStyles()

    return (
        <div className={classes.root}>
        <Header />
        <Main className={classes.container}>
            <section className={classes.mission}>
                <div>
                    <Typography variant="h1">Our Mission</Typography>
                    <Typography variant="h5">Assisting low-revenue organizations by creating and enhancing their digital footprint and offering the fresh perspective of collegiate and professional minds.</Typography>
                </div>
            </section>
            <section className={classes.mission}>
                <div>
                    <Typography variant="h1">Our History</Typography>
                    <Typography variant="h5">
                        <br />
                        In May 2019, Enactus at Southern Adventist University recognized a need in their local community, 
                        and decided to address the need properly. The Collegedale-Chattanooga area was suffering from a devastating 
                        tornado and the outbreak of the novel Coronavirus. Small businesses, startups, and nonprofits were all forced 
                        to go online whether or not they were ready. 
                        <br /><br />
                        Many businesses struggled with learning how to navigate digital marketing platforms and market to a new type 
                        of Customer – the online consumer. This resulted in major revenue losses. 
                        <br /><br />
                        Fortunately, several business majors and marketing majors at Southern Adventist University formed a solution 
                        called Illuminate Marking. Illuminate acts like a marketing service provider, but is focused on training the owner 
                        or sales personnel at the low-revenue organization on how to run their own marketing services. Illuminate is 
                        low cost to free billing structure enables every struggling business to receive the assistance they need. Thus, 
                        these businesses can be more sustainable, increase their number of Customers, and increase their revenues. 
                    </Typography>
                </div>
            </section>
        </Main>
        </div>
    )
}

export default About