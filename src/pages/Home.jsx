import React, { useRef, useState } from 'react'
import { createUseStyles } from 'react-jss'
import {
    Container,
    Grid,
    Typography,
    useTheme,
    useMediaQuery
} from '@mui/material'
import Zoom from 'react-reveal/Zoom'
import Main from '../components/Main'
import Hero from '../components/Hero'
import Youtube from '../components/Youtube'
import PublicIcon from '@mui/icons-material/Public';
import BrushIcon from '@mui/icons-material/Brush';
import CorporateFareIcon from '@mui/icons-material/CorporateFare';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import PersonCard from '../components/PersonCard'

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
        color: 'white'
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
                                            <Zoom delay={!isMobile ? 150 * (index + 1) : 0}>
                                                <div>
                                                    {item.icon}
                                                    <Typography variant="h6">{item.title}</Typography>
                                                    <Typography variant="subtitle1">{item.desc}</Typography>
                                                </div>
                                            </Zoom>
                                        </Grid>
                                    )    
                                }
                            </Grid>
                            <Grid container item
                                xs={1} md={1}
                            >
                                <Zoom delay={!isMobile ? 150 * 5 : 0}>
                                    <div className={classes.cardContainer}>
                                        <div className={classes.videoContainer}>
                                            <Youtube videoId={videoId} style={{ 
                                                borderRadius: '0.75rem' 
                                            }}/>
                                        </div>
                                        <Typography variant="subtitle1" className={classes.videoText}>
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
                                            incididunt ut labore et dolore magna aliqua. Sed tempus urna et pharetra.
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
                                    <Grid item xs={1} md={1} key={`person_${ index }`}>
                                        <Zoom delay={!isMobile ? index % 2 === 0 ? 0 : 150 : 0}>
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

const infoData = [
    {
        title: 'Social Media',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
        icon: <PublicIcon />,
    },
    {
        title: 'Graphic Design',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
        icon: <BrushIcon />,
    },
    {
        title: 'Marketing',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
        icon: <CorporateFareIcon />,
    },
    {
        title: 'Business Connections',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
        icon: <BusinessCenterIcon />,
    }
]

const peopleData = [
    {
        name: 'Roman Johnson',
        title: 'Project Manager',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
        photo: 'https://media-exp1.licdn.com/dms/image/C5603AQHC-a_xla9IQA/profile-displayphoto-shrink_800_800/0/1636062296861?e=1648684800&v=beta&t=VkRY_CCjFC2_QITTAx5agdXJ-xhOBLT8kTrehXura8M'
    },
    {
        name: 'Mason Harmon',
        title: 'Project Manager',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
        photo: 'https://media-exp1.licdn.com/dms/image/C4E03AQF6Ujdxf25WVQ/profile-displayphoto-shrink_800_800/0/1638888697683?e=1648684800&v=beta&t=RT-R3eWuEXMt1pjy5WZzAX68yjYy8ZXBNUgahDHOM-k'
    },
    {
        name: 'Kareena Hansen',
        title: 'Human Resources',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
        photo: 'https://media-exp1.licdn.com/dms/image/C4E03AQF1ylVQSMwjfQ/profile-displayphoto-shrink_800_800/0/1635083945911?e=1648684800&v=beta&t=PTTeWkASdKbLlRt4mGm9fiLUZtB-N_YIUCggNsHKe_Q'
    },
    {
        name: 'John Doe',
        title: 'VIP',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
        photo: 'https://i.pravatar.cc/300'
    }
]

const videoId = 'asJUXaJrPtU'