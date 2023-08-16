import React from 'react'
import Fade from 'react-reveal/Fade'
import Event from "./Event"
const { v4: uuidv4 } = require('uuid')

function EventsSection({ List }) {
    return (
        List.map((event) =>
            <Fade top distance='10%' duration={800} key={uuidv4()} fraction={0.7}>
                    <Event event={event} />
            </Fade>
        )
    )
}

export default EventsSection