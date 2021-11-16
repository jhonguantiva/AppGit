import React from 'react'
import { Link } from 'react-router-dom';


//Styles
import "./cards.style.css"
const Cards = (props) => {
    
     const {userName,image,followers,following,repositories} = props
    return (
        <div className="card">
            <img src={image} alt={`image of ${userName}`}/>
            <h2>{userName}</h2>
            <ul>
                <Link to={`/users/${userName}/followers`}><li>Followers</li></Link>
                <Link to={`/users/${userName}/following`}><li>Following</li></Link>
                <Link to={`/users/${userName}/repos`}><li>Repositories</li></Link>          
            </ul>

        </div>
    )
}

export default Cards

