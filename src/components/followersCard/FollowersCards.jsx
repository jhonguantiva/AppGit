import React from 'react'
import { Link } from 'react-router-dom'

const FollowersCards = ({userName, image}) => {
    return (
        <div>
            <img src={image} alt={`image of ${userName}`}/>
            <h4>{userName}</h4>
            <Link to={`/users/${userName}`}><button>Ver mas!</button></Link>
            
        </div>
    )
}

export default FollowersCards
