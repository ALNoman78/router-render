import React from 'react'
import PropTypes from 'prop-types'
import { Link, useNavigate } from 'react-router-dom'

const SingleCommetn = ({ props }) => {
    const { name, email, body, id } = props;

    const navigate = useNavigate()

    const  handleShow = () => {
        navigate (`/comment/${id}`)
    }
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
                    <p>Email address : {email}</p>
                    <div className="card-actions justify-center">
                        <Link to={`/comment/${id}`}>
                            <button className="btn btn-primary">See more </button>
                        </Link>
                        <button onClick={handleShow} className='btn'> Details</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

SingleCommetn.propTypes = {
    props: PropTypes.object.isRequired,
}

export default SingleCommetn