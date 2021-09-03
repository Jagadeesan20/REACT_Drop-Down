import React from 'react'
import{Link} from 'react-router-dom'
import './button.css'

const Button = () => {
    return (
        <>
            <Link to='/signup'>
                <button className='btn'>SignUp</button>
            </Link>
        </>
    )
}

export default Button
