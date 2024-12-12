import React from 'react'
import PropTypes from 'prop-types'
import { useLoaderData } from 'react-router-dom'
import Details from '../User Details/Details'

const Users = () => {
    const user = useLoaderData()
    console.log(user)
    return (
        <div className='md:w-10/12 mx-auto'>
            <h2>This is user components : {user.length}</h2>
            <div className='grid grid-cols-1 md:grid-cols-3 m-4 gap-4'>
                {
                    user.map((user, idx) => <Details key={idx} props={user}></Details>)
                }
            </div>
        </div>
    )
}

Users.propTypes = {}

export default Users