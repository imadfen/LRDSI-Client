import React, { useEffect, useState } from 'react'
import './SuccessNotif.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleCheck } from '@fortawesome/free-regular-svg-icons'


function SuccessNotif({depenVar, time, text, changeVar}) {

    useEffect(() => {
        const timer = setTimeout(() => {
            if (changeVar != undefined) {
                changeVar()
            }
        }, time)
    

        return ()=> clearTimeout(timer)
    
    }, [depenVar]);

    return (
        <div className='notif-body'>
            <FontAwesomeIcon icon={faCircleCheck} className='notif-logo'/>
            <h4 className='notif-text'>{text}</h4>
        </div>
    )
}

export default SuccessNotif