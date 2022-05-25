import React, { useState } from 'react';
import Sidebar from '../components/SideBar/Sidebar';
import Navbar from '../components/NavBar/Navbar';
import Carousel from '../components/Carousel/Carousel';

const Home = () => {
    const [isOpen, setIsOpen] = useState(false)

    const toggle = () => {
        setIsOpen(!isOpen)
    }

    return (
        <>
        <Sidebar isOpen={isOpen} toggle={toggle}/>
        <Navbar toggle={toggle}/>
        <Carousel />
        </>
    )
}

export default Home;