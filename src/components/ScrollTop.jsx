
import React, { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";

const ScrollTop = () => {

    const oldLocation = useRef(null);
    const routePath = useLocation()


    const onTop = () => {
        window.scrollTo(0, 0)
    }
    
    useEffect(() => {
        if (oldLocation.current !== routePath.pathname) {
            onTop()
            oldLocation.current = routePath.pathname
        }

        if (oldLocation.current === null)
            oldLocation.current = routePath.pathname

    }, [routePath])

    return null;
}

export default ScrollTop