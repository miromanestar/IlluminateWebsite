import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { createUseStyles } from 'react-jss'

import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import NotFound from './pages/NotFound'

const useStyles = createUseStyles(theme => ({ 
    root: {
        minHeight: '100vh',
        backgroundColor: theme.colors.mutedWhite,
    }
}))

const App = () => {
    const classes = useStyles()

    return (
        <div className={classes.root}>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
            <Footer />
        </div>
    )
}

export default App