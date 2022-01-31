import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router } from 'react-router-dom'
import { ThemeProvider } from 'react-jss'
import {
    ThemeProvider as MUIThemeProvider,
    StyledEngineProvider,
    createTheme,
    CssBaseline
} from '@mui/material'
import './index.css'
import App from './App'

// THEME INSPIRATION https://demos.creative-tim.com/material-kit-react/#/pages/landing-pages/about-us
const theme = createTheme({
    colors: {
        primary: '#F8B936',
        mutedWhite: '#F0F2F5',
        mutedText: '#7B809A',
        mutedText2: '#E0E1E3',
        darkGradient: 'linear-gradient(195deg, rgb(66, 66, 74), rgb(25, 25, 25))'
    },

    boxShadows: {
        light: 'rgb(0 0 0 / 10%) 0rem 0.25rem 0.375rem -0.0625rem, rgb(0 0 0 / 6%) 0rem 0.125rem 0.25rem -0.0625rem',
        feather: 'rgb(0 0 0 / 5%) 0rem 1.25rem 1.6875rem 0rem'
    },

    //MUI overrides
    palette: {
        primary: {
            main: '#F8B936',
            contrastText: '#fff'
        }
    }
})

ReactDOM.render(
    <Router>
        <MUIThemeProvider theme={theme}>
            <CssBaseline />
            <ThemeProvider theme={theme}>
                <StyledEngineProvider>
                    <App />
                </StyledEngineProvider>
            </ThemeProvider>
        </MUIThemeProvider>
    </Router>,
    document.getElementById('root')
)
