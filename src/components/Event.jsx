import React, { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalendarDays } from '@fortawesome/free-solid-svg-icons'
import './Event.css'
import fetchFunction from "../Functions/fetchFunction"

function Event({event}) {
    const [imageExists, setImageExists] = useState(false);
    const [imageData, setImageData] = useState(null);

    useEffect(() => {
        const fetchImage = async () => {
            try {
                const response = await fetchFunction(`/images/${event.image_src}`);
                const resdata = await response.blob();
                setImageData(URL.createObjectURL(resdata));
            } catch (error) {
                
            }
        };

        fetchImage();
    }, []);

    const title = event.title
    const description = event.description
    const date = event.date
    const image = imageData

    


    async function isImageExists() {
        if (image !== null) {
            try {
                const response = await fetchFunction(imageData)
                
                if (!response.ok) {
                    console.error("couldn't find image");
                }
                else{
                    setImageExists(true)
                }
            } catch (error) {
                console.error("failed to load image");
            }

        }else{
            return false
        }
    }

    isImageExists()

    return (
        <div className='Event'>
                <h3 className='Event-title'>{title}</h3>
                <div className='Event-date'>
                    <FontAwesomeIcon icon={faCalendarDays} className='date-icon'/>
                    {date}
                </div>
                <p className='Event-description'>&nbsp;&nbsp;{description}</p>
                {imageExists && image
                ? <img src={imageData} width="100%"/>
                : ""}
        </div>
    )
}

export default Event