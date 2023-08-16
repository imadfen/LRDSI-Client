import React, { useState } from 'react'
import './PagesList.css'
import { Menu } from '@mui/material'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown } from '@fortawesome/free-solid-svg-icons';

function PagesList({ switchContent, selected, isLargeScreen }) {
    const [anchorEl, setAnchorEl] = useState(null);

    const clickHandler = (index) => {
        switchContent(index)
        handleClose();
    }

    const handleClose = () => {
        setAnchorEl(null);
    };

    const handleOpenMenu = (event) => {
        setAnchorEl(event.currentTarget);
    };

    return (
        <div>
            {isLargeScreen ?
                <div className='table'>
                    <p className={selected == 0 ? "selected" : null} onClick={() => clickHandler(0)}>Publications et communication</p>
                    <p className={selected == 1 ? "selected" : null} onClick={() => clickHandler(1)}>Thèses et mémoires</p>
                    <p className={selected == 2 ? "selected" : null} onClick={() => clickHandler(2)}>Evènements scientifiques</p>
                </div>

                :
                <>
                    <button onClick={handleOpenMenu} className='menu-button'>
                        <p>
                            {selected == 0 && "Publications et communication"
                                || selected == 1 && "Thèses et mémoires"
                                || selected == 2 && "Evènements scientifiques"}
                        </p>

                        <FontAwesomeIcon icon={faCaretDown} />
                    </button>
                    <Menu
                        id="basic-menu"
                        anchorEl={anchorEl}
                        open={Boolean(anchorEl)}
                        onClose={handleClose}
                        sx={{ bg: "#126e62" }}
                    >
                        <div className='table'>
                            <p className={selected == 0 ? "selected": null} onClick={() => clickHandler(0)}>Publications et communication</p>
                            <p className={selected == 1 ? "selected": null} onClick={() => clickHandler(1)}>Thèses et mémoires</p>
                            <p className={selected == 2 ? "selected": null} onClick={() => clickHandler(2)}>Evènements scientifiques</p>
                        </div>
                    </Menu>
                </>
            }
        </div >
    )
}

export default PagesList