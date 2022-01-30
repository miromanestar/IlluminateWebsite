import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { createUseStyles } from 'react-jss'

import AnimatedRoutes from './components/AnimatedRoutes'
import ResponsiveNavbar from './components/ResponsiveNavbar'
import Footer from './components/Footer'

import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import NotFound from './pages/NotFound'
import ScrollTop from './components/ScrollTop'

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
                <ScrollTop />
                <AnimatedRoutes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="*" element={<NotFound />} />
                </AnimatedRoutes>
            <Footer />
        </div>
    )
}

export default App