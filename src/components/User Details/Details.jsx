import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

const Details = ({ props }) => {
    const { name, username, id, email } = props
    return (
        <div>
            <div className="card bg-base-100 image-full shadow-xl">
                <figure>
                    <img
                        src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                        alt="Shoes" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">Name : {name}</h2>
                    <p>Username : {username}</p>
                    <p>Email address : {email}</p>
                    <div className="card-actions justify-center">
                        <Link to={`/user/${id}`}>
                            <button className="btn btn-primary">Buy Now</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

Details.propTypes = {}

export default Details