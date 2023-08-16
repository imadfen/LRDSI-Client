import React, { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalendarDays } from '@fortawesome/free-solid-svg-icons'
import './Event.css'
import fetchFunction from "../Functions/fetchFunction"

function Event({ event }) {
    const [imageData, setImageData] = useState(null);

    useEffect(() => {
        fetchImage();
    }, []);

    const fetchImage = () => {
        fetchFunction(`/images/${event.image_src}`)
            .then(response => response.blob())
            .then(blob => {
                const reader = new FileReader();
                reader.onload = () => {
                    setImageData(reader.result);
                };
                reader.readAsDataURL(blob);
            })
            .catch(error => { });
    };

    return (
        <div className='Event'>
            <h3 className='Event-title'>{event.title}</h3>
            <div className='Event-date'>
                <FontAwesomeIcon icon={faCalendarDays} className='date-icon' />
                {event.date}
            </div>
            <p className='Event-description'>&nbsp;&nbsp;{event.description}</p>
            {imageData &&
                <img src={imageData} width="100%" />
            }
        </div>
    )
}

export default Event