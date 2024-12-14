import React from 'react'
import PropTypes from 'prop-types'
import { useLoaderData, useNavigate } from 'react-router-dom'

const UsersService = () => {

    const user = useLoaderData()

    const navigate = useNavigate()

    const handleBack = () => {
        navigate(-1)
    }
    const {name , email} = user

    return (
        <div className='text-center p-4 border border-red-400 rounded-xl m-4 md:w-96 w-full mx-auto'>
            <h2>Name : {name}</h2>
            <h3>Email address : {email}</h3>
            <p>Phone : {user.phone}</p>
            <button className='btn ' onClick={handleBack}>Back</button>
        </div>
    )
}

UsersService.propTypes = {}

export default UsersService