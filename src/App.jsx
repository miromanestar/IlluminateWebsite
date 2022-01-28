import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { createUseStyles } from 'react-jss'

import ResponsiveNavbar from './components/ResponsiveNavbar'
import Footer from './components/Footer'

import Home from './pages/Home'
import About from './pages/About'
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
            <ResponsiveNavbar />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="*" element={<NotFound />} />
                </Routes>
            <Footer />
        </div>
    )
}

export default App