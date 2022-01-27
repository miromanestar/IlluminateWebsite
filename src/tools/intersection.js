import { useState, useEffect } from 'react'

//EXPLANATION: https://www.webtips.dev/webtips/react-hooks/element-in-viewport

const useContinualIntersection = (element, rootMargin) => {
    const [isVisible, setState] = useState(false)

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                setState(entry.isIntersecting)
            }, { rootMargin }
        )

        element && observer.observe(element)

        return () => observer.unobserve(element)
    }, [])

    return isVisible
};

const useOnceIntersection = (element, rootMargin) => {
    const [isVisible, setState] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setState(entry.isIntersecting);
                    observer.unobserve(element.current);
                }
            }, { rootMargin }
        )

        element && observer.observe(element)

        return () => observer.unobserve(element)
    }, [])

    return isVisible

}

export {
    useContinualIntersection,
    useOnceIntersection
}