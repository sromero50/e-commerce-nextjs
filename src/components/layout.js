import React from 'react'
import Navbar from './navbar'
import Footer from './footer'

const Layout = ({ children }) => {

    // className='m-0 p-0 flex flex-col min-h-screen'
    return (
        <div>
            <Navbar />
            {children}
           
        </div>
    )
}

export default Layout
