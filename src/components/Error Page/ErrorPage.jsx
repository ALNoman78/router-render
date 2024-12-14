import React from 'react'
import PropTypes from 'prop-types'
import { useNavigate, useRouteError } from 'react-router-dom'

const ErrorPage = props => {
    const error = useRouteError()
    console.log(error)

    const navigate = useNavigate()

    const handleHome = () => {
        navigate(-1)
    }
    return (
        <div className='text-center font-bold text-2xl'>
            <h2>Oops ! </h2>
            <p>{error.statusText || error.message}</p>
            {
                error.status === 404 && <div>
                    <h3>Page not fount</h3>
                    <button onClick={handleHome} className='btn'>Go Home</button>
                </div>
            }
        </div>
    )
}

ErrorPage.propTypes = {}

export default ErrorPage