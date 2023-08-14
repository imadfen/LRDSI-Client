import React from 'react'
import Footer from './Footer'
import Navbar from './Navbar'
import { Outlet } from 'react-router'

function ClientLayout(props) {
    return (
        <>
            <Navbar />
            {props.children}
            <Footer />
        </>
    )
}

export default ClientLayout