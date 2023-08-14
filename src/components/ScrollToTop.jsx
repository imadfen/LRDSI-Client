import React, { useEffect, useState } from 'react'
import './ScrollToTop.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowUp } from '@fortawesome/free-solid-svg-icons'

function ScrollToTop() {
    const [enableButton, setEnableButton] = useState(false);

    useEffect(() => {
        const intervalId = setInterval(() => {
            if (window.scrollY >= 240) {
                setEnableButton(true)
            }
            else{
                setEnableButton(false)
            }
        }, 100);
        
        return () => {
            clearInterval(intervalId);
        };
    }, []);

    const goToTop = () => {
        window.scrollTo({top: 0, behavior: "smooth"})
    }

    return (
        <>
            {enableButton
                ? <button className="go-top-btn" onClick={goToTop}><FontAwesomeIcon className='arrow-icon' icon={faArrowUp}/></button>     
                : null
            }
        </>
    )
}

export default ScrollToTop