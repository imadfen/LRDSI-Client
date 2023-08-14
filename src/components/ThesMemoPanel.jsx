import React from 'react'
import Fade from 'react-reveal/Fade';
import Thesis from '../components/Thesis';
import Memory from '../components/Memory';
const { v4: uuidv4 } = require('uuid');

function ThesMemoPanel({panel, List}) {
    
    const SelectedPanel = () => {
        switch (panel) {
            case "thes":
                return(
                    List.map((thes, index, array) => 
                        <>
                            <Fade top distance='10%' duration={800} key={uuidv4()} fraction={0.7}>
                                <>
                                    <Thesis thes={thes} key={uuidv4()} />
                                    {index!=array.length-1?<hr className='separator' key={uuidv4()}/>:""}
                                </>
                            </Fade>
                        </>
                    )
                )

            case "memo":
                return(
                    List.map((memo, index, array) => 
                        <>
                            <Fade top distance='10%' duration={800} key={uuidv4()} fraction={0.7}>
                                <>
                                    <Memory memo={memo} key={uuidv4()} />
                                    {index!=array.length-1?<hr className='separator' key={uuidv4()}/>:""}
                                </>
                            </Fade>
                        </>
                    )
                )
        
            default:
                return ""
        }
    }
    
    return (
        <SelectedPanel />
    )
}

export default ThesMemoPanel