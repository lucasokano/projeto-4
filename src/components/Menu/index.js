import React from 'react'
import './index.css'
import {Link} from "react-router-dom"

const Menu = props => {
    return(
        <nav className="Menu">
            <ul>
                <li>
                    <Link to="/Home">Home</Link>
                    
                </li>

                <li>
                    <Link to="/About">About</Link> 
                </li>

                <li>
                    <Link to="/Imagem">Imagem</Link> 
                </li>

            </ul>
        </nav>
    )
 }

export default Menu