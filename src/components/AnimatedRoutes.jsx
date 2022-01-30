import React, { useRef } from 'react'
import { Routes, useLocation } from 'react-router-dom'
import { useTransition, animated } from 'react-spring'

const AnimatedRoutes = ({ children }) => {
    const location = useLocation()
    const keyRef = useRef(location.pathname)

    const transitions = useTransition(location, {
        from: { opacity: 0, display: 'none' },
        enter: { opacity: 1, display: '' },
        leave: { opacity: 0 },
        expires: 110,
        trail: 350,
        config: {
            duration: 200
        },
        order: ['leave', 'enter', 'update']
    })

    if (keyRef.current !== location.pathname) {
        keyRef.current = location.pathname

        return transitions( (props, item) => (
            <animated.div style={props}>
                <Routes location={item}>
                    {children}
                </Routes>
            </animated.div>
        ))
    } else {
        keyRef.current = location.pathname

        return (
            <Routes location={location}>
                {children}
            </Routes>
        )
    }
}

export default AnimatedRoutes