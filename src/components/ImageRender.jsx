import React, { useEffect, useState } from 'react'
import './ImageRender.css'
import fetchFunction from '../Functions/fetchFunction';

const ImageRender = React.memo((props) => {
    const [imageURL, setImageURL] = useState(null)
    const [loaded, setLoaded] = useState(false);
    
    useEffect(() => {
        if (props.imageName) {
            const fetchImage = async () => {
                try {
                    const response = await fetchFunction(`/images/${props.imageName}`);
                    const data = await response.blob();
                    setImageURL(URL.createObjectURL(data));
                    setLoaded(true)
                    
                } catch (error) {
                    
                }
            };
            
            fetchImage();
        }
    }, [props.imageName]);
    
    if (!props.imageUrl && !props.imageName || props.imageUrl && !props.imageName && props.exept) {
        return (
            null
        )
    } else if (props.imageName && props.imageUrl) {
        return (
            <div className='image-render-div'>
                <img src={props.imageUrl} alt={props.imageName} className='image-render'/>
            </div>
        )
    } else if (props.imageUrl) {
        return (
            <div className='image-render-div'>
                <img src={props.imageUrl} className='image-render'/>
            </div>
        )
    }

    return (
        <div className='image-render-div'>
            {loaded ?
                <img src={imageURL} alt={props.imageName} className='image-render'/> :
                <p style={{color: "rgba(0, 0, 0, 0.5)"}}>
                    chargement l'image...
                </p>
            }
        </div>
    )
})

export default ImageRender