import React from 'react'
import './PagesList.css'

function PagesList({switchContent, selected}) {

    const clickHandler = (index) => {
        switchContent(index)
    }

    return (
        <div>
            <div className='table'>
                <p className={selected==0 ? "selected":null} onClick={() => clickHandler(0)}>Publications et communication</p>
                <p className={selected==1 ? "selected":null} onClick={() => clickHandler(1)}>Thèses et mémoires</p>
                <p className={selected==2 ? "selected":null} onClick={() => clickHandler(2)}>Evènements scientifiques</p>
            </div>
        </div>
    )
}

export default PagesList