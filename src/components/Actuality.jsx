import React, { useEffect, useState } from 'react'
import './Actuality.css'
import ImageRender from './ImageRender'

function Actuality({data, ...props}) {
    return (
        <div className='actuality' {...props}>
            <div className='actuality-user-date'>
                <p className='user'>{data.author}</p>
                <p className='user'>-</p>
                <p className='date'>{data.date}</p>
            </div>
            <h2 className='actuality-title'>{data.title}</h2>
            <p className='actuality-description'>{data.description}</p>
            <div className='actuality-image-container'>
                {data.image_src
                    ? <ImageRender imageName={data.image_src} alt={data.image_src} className='actuality-image'/>
                    : null
                }
            </div>
        </div>
    )
}

export default Actuality