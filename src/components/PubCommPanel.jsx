import React from 'react'
import Fade from 'react-reveal/Fade';
import Publication from '../components/Publication';
import Communication from '../components/Communication';
const { v4: uuidv4 } = require('uuid');

function PubCommPanel({panel, List}) {
    
    const SelectedPanel = () => {
        switch (panel) {
            case "pub":
                return(
                    List.map((pub, index, array) =>
                        <>
                            <Fade top distance='10%' duration={800} key={uuidv4()} fraction={0.7}>
                                <>
                                    <Publication pub={pub} key={uuidv4()} />
                                    {index!=array.length-1?<hr className='separator' key={uuidv4()}/>:""}
                                </>
                            </Fade>
                        </>
                    )
                )
            
            case "comm":
                return(
                    List.map((comm, index, array) =>
                        <>
                            <Fade top distance='10%' duration={800} key={uuidv4()} fraction={0.7}>
                                <>
                                    <Communication comm={comm} key={uuidv4()} />
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

export default PubCommPanel