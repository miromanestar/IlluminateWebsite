import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { createUseStyles } from 'react-jss'

import ResponsiveNavbar from './components/ResponsiveNavbar'
import Footer from './components/Footer'

import Home from './pages/Home'
import About from './pages/About'
import Offers from './pages/Offers'
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
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/offers" element={<Offers />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="*" element={<NotFound />} />
                </Routes>
            <Footer />
        </div>
    )
}

export default App