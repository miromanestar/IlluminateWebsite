import React from 'react'
import { createUseStyles } from 'react-jss'
import {
    Container,
    Grid,
    Typography,
    Icon,
    useTheme,
    useMediaQuery
} from '@mui/material'
import { Zoom } from 'react-awesome-reveal'
import Main from '../components/Main'
import Hero from '../components/Hero'
import Youtube from '../components/Youtube'
import PersonCard from '../components/PersonCard'

import { team, features, video_card } from '../../content/pages/home.json'

const peopleData = team || []
const infoData = features || []
const videoId = video_card.video_url || ''

const useStyles = createUseStyles(theme => ({ 
    root: {
        backgroundColor: theme.colors.mutedWhite,
    },

    container: {
        marginTop: '-60px',
    },

    section1: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '90px 16px',

        [theme.breakpoints.down('md')]: {
            padding: '45px 16px',
        }
    },

    info: {
        '& svg': {
            color: theme.colors.primary
        }
    },

    cardContainer: {
        display: 'flex',
        flexDirection: 'column',
        position: 'relative',
        maxWidth: '600px',
        borderRadius: '0.75rem',
        boxShadow: theme.shadows[9],
        background: 'linear-gradient(12deg, rgb(66, 66, 74), rgb(25, 25, 25))',
        color: 'white',
    },

    videoContainer: {
        position: 'relative',
        marginTop: '-24px',
        marginLeft: '24px',
        marginRight: '24px',
        borderRadius: '0.75rem',
        boxShadow: theme.shadows[9],
        overflow: 'hidden'
    },

    videoText: {
        padding: '24px',
        textAlign: 'center'
    },

    personZoom: {
        '& .react-reveal': {
            height: '100%'
        }
    },

    section2: {
        background: theme.colors.darkGradient,
        padding: '90px 16px',
        borderBottomLeftRadius: '0.75rem',
        borderBottomRightRadius: '0.75rem',
    }
}))

const App = () => {
    const classes = useStyles()
    const theme = useTheme()
    const isMobile = useMediaQuery(theme.breakpoints.down('md'))

    return (
        <div className={classes.root}>
            <Hero 
                parallax 
                ratio={0.2}
                mobile={false}
            />

            <Main className={classes.container}>
                <section className={classes.section1}>
                    <Container>
                        <Grid 
                            container
                            columns={{ xs: 1, md: 2}}
                            spacing={{ xs: 8, md: 2 }}
                            columnSpacing={{ md: 16}}
                        >
                            <Grid 
                                container item
                                className={classes.info}
                                columns={{ xs: 1, md: 2 }}
                                xs={1} md={1}
                                spacing={4}
                            >
                                {
                                    infoData.map((item, index) =>
                                        <Grid item xs={1} md={1} key={`card_${ index }`}>
                                            <Zoom delay={!isMobile ? 150 * (index + 1) : 0}  triggerOnce={true}>
                                                <div>
                                                    <Icon color="primary">{item.icon}</Icon>
                                                    <Typography variant="h6">{item.title}</Typography>
                                                    <Typography variant="subtitle1">{item.description}</Typography>
                                                </div>
                                            </Zoom>
                                        </Grid>
                                    )    
                                }
                            </Grid>
                            <Grid item
                                xs={1} md={1}
                            >
                                <Zoom delay={!isMobile ? 150 * 5 : 0} triggerOnce={true}>
                                    <div className={classes.cardContainer}>
                                        <div className={classes.videoContainer}>
                                            <Youtube url={videoId} style={{ 
                                                borderRadius: '0.75rem' 
                                            }}/>
                                        </div>
                                        <Typography variant="subtitle1" className={classes.videoText}>
                                            {video_card.description}
                                        </Typography>
                                    </div>
                                </Zoom>
                            </Grid>
                        </Grid>
                    </Container>
                </section>

                <section className={classes.section2}>
                    <Container>
                        <Grid container
                            columns={{ xs: 1, md: 2}}
                            spacing={8}
                        >
                            {
                                peopleData.map((item, index) => (
                                    <Grid className={classes.personZoom} item xs={1} md={1} key={`person_${ index }`}>
                                        <Zoom delay={!isMobile ? index % 2 === 0 ? 0 : 150 : 0} triggerOnce={true}>
                                            <PersonCard person={item} />
                                        </Zoom>
                                    </Grid>
                                ))
                            }
                        </Grid>
                    </Container>
                </section>
            </Main>
        </div>
    )
}

export default App