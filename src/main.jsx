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
import '@material-design-icons/font'
import App from './App'

import * as THEME from '../content/meta/theme.json'

// THEME INSPIRATION https://demos.creative-tim.com/material-kit-react/#/pages/landing-pages/about-us
const theme = createTheme({
    colors: {
        primary: THEME.palette.primary,
        secondary: THEME.palette.secondary,
        mutedWhite: THEME.palette.muted_white,
        mutedText: THEME.palette.muted_text,
        mutedText2: THEME.palette.muted_text2,
        darkGradient: THEME.gradients.dark_gradient
    },

    boxShadows: {
        light: THEME.box_shadows.light,
        feather: THEME.box_shadows.feather,
    },

    //MUI overrides
    palette: {
        primary: {
            main: THEME.palette.primary,
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
