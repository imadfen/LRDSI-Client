import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalendarDays, faUserGroup, faUserLarge } from '@fortawesome/free-solid-svg-icons'
import './Project.css'

function Project({project}) {

    const responsable = project.responsable
    const resonsablesList = responsable.includes(';') ? responsable.split(/;/g) : (responsable.includes(',') ? responsable.split(/,/g) : [responsable])

    return (
        <div className='project'>
            <h3 className='name'>{project.name}</h3>
            
            <hr/>

            <div className='date-responsable'>
                <div className='date'>
                    <FontAwesomeIcon icon={faCalendarDays} />
                    <p>{project.date}</p>
                </div>

                <div className='responsable'>
                    {resonsablesList.length>1
                        ? <>
                                <FontAwesomeIcon icon={faUserGroup} />
                                <div className='multi-respo'>
                                    {resonsablesList.map(respo =>
                                        <p>{respo}</p>
                                    )}
                                </div>
                          </>
                        : <>
                                <FontAwesomeIcon icon={faUserLarge} />
                                <p>{resonsablesList}</p>
                          </>
                    }

                </div>
            </div>

            <div className='content'>
                <pre>{project.title}</pre>
            </div>

        </div>
    )
}

export default Project