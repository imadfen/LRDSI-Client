import React, { useState } from 'react';
import './Mission.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleUp } from '@fortawesome/free-solid-svg-icons'



function Mission(props) {
    const [collapse, setCollapse] = useState(true);


    const splitText = (text, n) => {
        const dotIndex = text.indexOf('.', n);
        const splitIndex = dotIndex !== -1 ? dotIndex + 1 : text.length;
        return [text.substring(0, splitIndex), text.substring(splitIndex)];
    }

    const mission = splitText(props.text, 500)
    const content = mission[0]
    const collapsed = mission[1]
    const handleCollapse = () => {
        setCollapse(!collapse)
    }

    if (collapse && collapsed.length > 0) {
        var points = "....."
    }else{
        var points = ""
    }


    const preTagStyle = { whiteSpace: "pre-wrap", wordWrap: "break-word", fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif"}

    return (
        <>
            <div className='content'>
                <pre style={preTagStyle}>{content + points}</pre>
                <span className={`long-text${collapse? "" : " expand"}`}>
                    <pre style={preTagStyle}>{collapsed}</pre>
                </span>
            </div>

            <div className='more-less-btn'>
                <div className='button' onClick={handleCollapse}>
                    <p>{collapse ? "plus" : "moins"}</p>
                    <FontAwesomeIcon className={`arrow ${props.teamId + (collapse? " arrow-up" : " arrow-down")}`} icon={faAngleUp} />
                </div>
            </div>
        </>
    )
}

export default Mission