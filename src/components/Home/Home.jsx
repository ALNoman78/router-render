import React from 'react'
import PropTypes from 'prop-types'
import Navbar from '../Navbar/Navbar'
import { Outlet, useLoaderData, useLocation, useNavigation } from 'react-router-dom'
import Footer from '../Footer/Footer'
import { Discuss } from 'react-loader-spinner'
import Hero from '../Hero Section/Hero'

const Home = () => {
    const navigation = useNavigation();
    const location = useLocation()

    console.log(location)
    return (
        <div className='min-h-screen'>
            <Navbar></Navbar>
            {/* <Hero></Hero> */}
            <div className='flex items-center justify-center'>
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
            </div>
            <Footer></Footer>
        </div>
    )
}

Home.propTypes = {}

export default Home

