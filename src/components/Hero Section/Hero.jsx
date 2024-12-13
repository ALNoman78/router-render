import React from 'react'
import PropTypes from 'prop-types'
import { Link, useNavigate } from 'react-router-dom'
import Navbar from '../Navbar/Navbar'

const Hero = () => {
    const navigate = useNavigate()

    const showDetailsHandler = () => {
        navigate('/galaxy')
    }
    return (
        <div className='mx-auto md:w-10/12 w-full'>
            <div className="hero min-h-screen">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <img
                        src="https://www.mobiledokan.co/wp-content/uploads/2024/10/Samsung-Galaxy-Z-Fold-Special.webp"
                        className="max-w-sm rounded-lg" />
                    <div>
                        <h1 className="text-5xl font-bold">Samsung Galaxy Z Fold 5 </h1>
                        <h3 className='text-5xl font-semibold my-4'>Galaxy AI is here</h3>
                        <p className="py-6">
                            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
                            quasi. In deleniti eaque aut repudiandae et a id nisi.
                        </p>
                        <button className="btn btn-primary" onClick={showDetailsHandler}>Get Started</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

Hero.propTypes = {}

export default Hero