import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router } from 'react-router-dom'
import { ThemeProvider } from 'react-jss'
import './index.css'
import App from './App'


// THEME INSPIRATION https://demos.creative-tim.com/material-kit-react/#/pages/landing-pages/about-us
const theme = {
    colors: {
        primary: '#F8B936',
        mutedWhite: '#F0F2F5',
        mutedText: '#9BA0A6',
    }
}

ReactDOM.render(
    <Router>
        <ThemeProvider theme={theme}>
            <App />
        </ThemeProvider>
    </Router>,
    document.getElementById('root')
)
