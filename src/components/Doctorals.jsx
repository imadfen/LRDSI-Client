import React from 'react'
import "./Doctorals.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCaretRight } from '@fortawesome/free-solid-svg-icons'
const { v4: uuidv4 } = require('uuid');

function Doctorals({list}) {
  return (
    <div className='doctoral-main'>
        {list.map(doctoral =>
            <div key={uuidv4()} className={`doctoral ${doctoral.id}`}>
                <FontAwesomeIcon className='bullet' icon={faCaretRight} />
                <p className='doctoral-name'><strong>{doctoral.name}</strong></p>
            </div>
        )}
    </div>
  )
}

export default Doctorals