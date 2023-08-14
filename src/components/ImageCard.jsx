import React from 'react'
import './ImageCard.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch, faTrash } from '@fortawesome/free-solid-svg-icons'
import ImageRender from './ImageRender'

function ImageCard(props) {
  return (
    <div className='image-card'>
      <div className='options'>
        <FontAwesomeIcon className='icon' icon={faSearch} onClick={()=>props.zoom(props.imageUrl)} />
        {!props.noAccess ? <FontAwesomeIcon className='icon' icon={faTrash} onClick={props.delete}/> : null}
      </div>

      <ImageRender imageUrl={props.imageUrl} imageName={props.imageName} />
    </div>
  )
}

export default ImageCard