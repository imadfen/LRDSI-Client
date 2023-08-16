import React, { useState } from 'react'
import Footer from './Footer'
import Navbar from './Navbar'
import HamburgerList from './HamburgerList'

function ClientLayout({ isLargeScreen, ...props }) {
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);

    const handleOnOpenDrawer = () => {
        setIsDrawerOpen(true);
    };

    const handleOnCloseDrawer = () => {
        setIsDrawerOpen(false);
    };

    return (
        <>
            <HamburgerList isOpen={isDrawerOpen} onClose={handleOnCloseDrawer} />
            <Navbar openDrawer={handleOnOpenDrawer} isLargeScreen={isLargeScreen} />
            {props.children}
            <Footer />
        </>
    )
}

export default ClientLayout