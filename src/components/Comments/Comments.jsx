import React from 'react'
import PropTypes from 'prop-types'
import { useLoaderData } from 'react-router-dom'
import SingleCommetn from '../Navbar/SingleCommetn'

const Comments = () => {
    const comment = useLoaderData()
    return (
        <div className='md:w-10/12 mx-auto w-full'>
            <h2>Comments : {comment.length}</h2>
            <div className='grid grid-cols-1 md:grid-cols-3 m-4 gap-4'>
                {
                    comment.map((message, idx) => <SingleCommetn key={idx} props={message} ></SingleCommetn>)
                }
            </div>
        </div>
    )
}

Comments.propTypes = {}

export default Comments