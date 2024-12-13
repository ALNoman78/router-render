import React from 'react'
import PropTypes from 'prop-types'
import Navbar from '../Navbar/Navbar'
import { Outlet, useNavigation } from 'react-router-dom'
import Footer from '../Footer/Footer'
import { Discuss } from 'react-loader-spinner'
import Hero from '../Hero Section/Hero'

const Home = () => {
    const navigation = useNavigation
    return (
        <div className='min-h-screen'>
            <Navbar></Navbar>
            <Hero></Hero>
            {
                navigation.state === 'loading' ? <Discuss
                visible={true}
                height="80"
                width="80"
                ariaLabel="discuss-loading"
                wrapperStyle={{}}
                wrapperClass="discuss-wrapper"
                color="#fff"
                backgroundColor="#F4442E"
                /> : <Outlet></Outlet>
            }
            <Footer></Footer>
        </div>
    )
}

Home.propTypes = {}

export default Home