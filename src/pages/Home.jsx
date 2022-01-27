import React, { useRef, useState } from 'react'
import { createUseStyles } from 'react-jss'
import {
    Container,
    Grid,
    Typography,
    Grow
} from '@mui/material'
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
        position: 'relative',
        backgroundColor: 'white',
        minHeight: '20vh',
        width: '98%',
        boxShadow: 'rgb(0 0 0 / 5%) 0rem 1.25rem 1.6875rem 0rem',
        margin: '0 auto',
        marginTop: '-60px',
        borderRadius: '0.75rem',
        padding: '20px 0',

        [theme.breakpoints.down('md')]: {
            width: '92%',
        }
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
        boxShadow: theme.boxShadows.light
    },

    videoContainer: {
        position: 'relative',
        marginTop: '-24px',
        marginLeft: '24px',
        marginRight: '24px',
        borderRadius: '0.75rem',
        boxShadow: theme.boxShadows.light,
        overflow: 'hidden'
    },

    videoText: {
        padding: '24px',
        textAlign: 'center'
    },

    section2: {
        background: theme.colors.darkGradient,
        padding: '90px 16px',
    }
}))

const App = () => {
    const classes = useStyles()

    return (
        <div className={classes.root}>
            <Hero 
                parallax 
                ratio={0.2}
                mobile={false}
            />

            <div className={classes.container}>
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
                                    <Grow
                                        in={true}
                                        timeout={(index + 1) * 400}
                                        key={`info_${index}`}
                                    >
                                        <Grid item xs={1} md={1}>
                                            {item.icon}
                                            <Typography variant="h6">{item.title}</Typography>
                                            <Typography variant="subtitle1">{item.desc}</Typography>
                                        </Grid>
                                    </Grow>
                                    )    
                                }
                            </Grid>
                            <Grid container item
                                xs={1} md={1}
                            >
                                <Grow
                                    in={true}
                                    timeout={800}
                                >
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
                                </Grow>
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
                                    <Grow
                                        in={true}
                                        timeout={(index + 1) * 400}
                                        key={`people_${index}`}
                                    >
                                        <Grid item xs={1} md={1}>
                                            <PersonCard person={item} />
                                        </Grid>
                                    </Grow>
                                ))
                            }
                        </Grid>
                    </Container>
                </section>
            </div>
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
        name: 'John Doe',
        title: 'VIP',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
        photo: 'https://i.pravatar.cc/300'
    },
    {
        name: 'John Doe',
        title: 'VIP',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
        photo: 'https://i.pravatar.cc/300'
    }
]

const videoId = 'asJUXaJrPtU'