import React from 'react'
import { createUseStyles } from 'react-jss'
import {
    Grid
} from '@mui/material'
import Zoom from 'react-reveal/Zoom'
import { Swiper, SwiperSlide } from 'swiper/react'
import { EffectFlip, Pagination, Autoplay } from 'swiper'
import Header from '../components/Header'
import Main from '../components/Main'
import ContentCard from '../components/ContentCard'
import InfoCard from '../components/InfoCard'

import "swiper/css"
import "swiper/css/effect-flip"
import "swiper/css/pagination"

import * as DATA from '../../content/pages/about.json'

const useStyles = createUseStyles(theme => ({ 
    container: {
        
        '& h3': {
            color: theme.colors.primary,
            textAlign: 'center',
        }
    },

    images: {
        width: '100%',
        display: 'flex',
        flexWrap: 'wrap',
        gap: '16px',
        justifyContent: 'space-evenly',
        height: 'min-content',

        '& img': {
            height: '200px',
            borderRadius: '0.75rem',
            boxShadow: theme.boxShadows.dark,
            transition: 'all 0.3s ease-in-out',

            '&:hover': {
                transform: 'scale(1.05)',
            }
        },
    },

    imageContainer: {
        width: 'fit-content',
        marginBottom: '10px',
        position: 'relative',
        height: 'min-content',
    },

    imgDesc: {
        textAlign: 'center'
    },

    responsive: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '90px 24px',

        [theme.breakpoints.down('md')]: {
            padding: '45px 16px',
            flexDirection: 'row-reverse',
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
    },

    reverseGrid: {
        [theme.breakpoints.down('md')]: { 
            flexDirection: 'column-reverse !important' 
        }
    },

    swiper: {
        width: '100%',

        '& .swiper-pagination-bullets': {
            bottom: '-20px'
        },

        '& .swiper-pagination-bullet': {
            backgroundColor: 'white',
        },

        '& .swiper-slide': {
            height: '100%',
        },

        '& .swiper-slide-shadow-left,.swiper-slide-shadow-right': {
            display: 'none',
        }
    },

    infoCard: {
        height: '100%',
    },
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
                    columnSpacing={{ md: 8}}
                    className={classes.reverseGrid}
                >
                    <Grid container item
                        xs={1} md={1}
                        alignContent="space-evenly"
                    >
                        <div className={classes.images}>
                            {
                                DATA.images.map((image, index) => (
                                    <Zoom
                                        key={`about-img-${index}`}
                                        delay={index * 150}
                                    >
                                        <div className={classes.imageContainer} >
                                            <img
                                                src={image.image} 
                                                alt={image.description}
                                            />
                                            <div className={classes.imgDesc}>{image.description}</div>
                                        </div>
                                    </Zoom>
                                ))
                            }
                        </div>
                        
                        <Swiper
                            effect={'flip'}
                            grabCursor={true}
                            modules={[EffectFlip, Pagination, Autoplay]}
                            pagination={true}
                            className={classes.swiper}
                            loop={true}
                            autoplay={{
                                delay: 3000,
                                disableOnInteraction: false
                            }}
                        >
                            {
                                DATA.quotes.map((quote, index) => (
                                    <SwiperSlide key={`about-quote-${index}`}>
                                        <InfoCard
                                            cls={classes.infoCard}
                                            title={quote.name}
                                            description={quote.content}
                                            subtitle={quote.subtitle}
                                            icon={quote.icon}
                                        />
                                    </SwiperSlide>
                                ))
                            }
                        </Swiper>
                    </Grid>
                    <Grid 
                        container item
                        className={classes.info}
                        columns={{ xs: 1, md: 2 }}
                        xs={1} md={1}
                    >
                        <Zoom>
                            <ContentCard
                                title={DATA.title}
                                subtitle={DATA.subtitle}
                                cls={classes.contentCard}
                            >
                                {DATA.content}
                            </ContentCard>
                        </Zoom>
                    </Grid>
                </Grid>
            </section>
        </Main>
        </div>
    )
}

export default About