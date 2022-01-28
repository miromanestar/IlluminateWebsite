import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { createUseStyles } from 'react-jss'

import LogoImg from '../assets/logo.png'

const useStyles = createUseStyles(theme => ({
    root: {
        
    },
}))

const Header = () => {
    const classes = useStyles()

    return (
        <div className={classes.root}>
            
        </div>
    )
}

export default Header