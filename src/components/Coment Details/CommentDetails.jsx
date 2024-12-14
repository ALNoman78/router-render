import React from 'react'
import PropTypes from 'prop-types'
import { useLoaderData, useNavigate, useParams } from 'react-router-dom'

const CommentDetails = () => {
    const details = useLoaderData()
    const {commentId} = useParams()
    const navigate = useNavigate()

    console.log(commentId);
    // console.log(details)
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