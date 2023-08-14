import React from 'react'
import "./Members.css"
const { v4: uuidv4 } = require('uuid');

function Members({chefId, list}) {

    return (
        <div className='member-main'>
            {list.map(member =>
                <div key={uuidv4()} className={`member ${member.id}`}>
                        {chefId == member.id ? (
                            <>
                                <h4 className="chef">Chef d'équipe</h4>
                                <div className="member-details">
                                    <div className='member-name-email'>
                                        <p className='member-name'><strong>{member.name}</strong></p>
                                    </div>
                                    <p className='member-title'>{member.title}</p>
                                </div>
                                <hr/>
                            </>
                        ) : (
                            <>
                                <div className="member-details">
                                    <div className='member-name-email'>
                                        <p className='member-name'><strong>{member.name}</strong></p>
                                    </div>
                                    <p className='member-title'>{member.title}</p>
                                </div>
                            </>
                        )}

                        
                    
                </div>
            )}
        </div>
    )
}

export default Members