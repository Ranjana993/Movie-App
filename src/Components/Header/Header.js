import React from 'react'
import "./Header.css"
import { Link } from 'react-router-dom'

// https://e7.pngegg.com/pngimages/55/847/png-clipart-movie-logo-the-film-logo.png

const Header = () => {
    return (
        <>
            <div className="header">
                <Link to="/">
                    <img src="https://e7.pngegg.com/pngimages/55/847/png-clipart-movie-logo-the-film-logo.png" alt="" />
                </Link>
            </div>
        </>
    )
}

export default Header