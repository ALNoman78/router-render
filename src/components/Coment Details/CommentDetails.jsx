import React from 'react'
import PropTypes from 'prop-types'
import { useLoaderData, useNavigate } from 'react-router-dom'

const CommentDetails = () => {
    const details = useLoaderData()
    // console.log(details)
    const navigate = useNavigate()

    const handleBack = () => {
        navigate(-1)
    }
    const {body , name } = details
    return (
        <div className='md:w-2/5 mx-auto align-middle my-5 border p-4 border-emerald-700 rounded-xl'>
            <h2>Name : {name}</h2>
            <h3>Comment : {body}</h3>
            <button onClick={handleBack} className="btn">Go Back</button>
        </div>
    )
}

CommentDetails.propTypes = {}

export default CommentDetails