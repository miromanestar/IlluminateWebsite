import React from 'react'
import { createUseStyles } from 'react-jss'
import {
    Typography
} from '@mui/material'
import Header from '../components/Header'
import Main from '../components/Main'
import ContentCard from '../components/ContentCard'

import * as DATA from '../../content/pages/offers.json'

const useStyles = createUseStyles(theme => ({
    container: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        gap: '60px',
        flexWrap: 'wrap',
        padding: theme.spacing(12, 2)
    },

    card: {
        background: `${theme.colors.darkGradient} !important`,
        color: 'white !important'
    },

    divider: {
        width: '100%',
        height: '3px',
        background: theme.colors.mutedWhite,
        opacity: 0.3,
        borderRadius: '0.75rem',
        margin: theme.spacing(0.8, 0),
    }
}))

const Offers = () => {
    const classes = useStyles()

    return (
        <div className={classes.root}>
            <Header title="Offers" />
            <Main className={classes.container}>
                {
                    DATA.offers.map((offer, index) =>
                        <ContentCard
                            key={`offer_${ index }`}
                            title={offer.title}
                            subtitle={offer.price}
                            cls={classes.card}
                        >
                            {
                                offer.features.map((item, i) => 
                                    <div key={`feature_${offer.title}${i}`}>
                                        <Typography 
                                            className={classes.feature}
                                            variant="h5" 
                                        >
                                            {item}
                                        </Typography>
                                        { i !== offer.features.length - 1 && <div className={classes.divider} /> }
                                    </div>
                                )
                            }
                        </ContentCard>
                    )
                }
            </Main>
        </div>
    )
}

export default Offers