import React from 'react'
import "./SingleMovie.css"

const staticImg = "https://static.tvmaze.com/uploads/images/medium_portrait/413/1034988.jpg"
// url , officialSite , language , rating , status type schedule

const SingleMovie = ({ name, image, rating, genres, language }) => {
    return (
        <div className='card'>
            <div className='info'>
                <img src={(image?.medium) ? (image?.medium) : (staticImg) } alt="" />
                <h3>{name}</h3>
                <h3> Rating : {(rating?.average) ? (rating?.average) : 0 }</h3>
                <h3> {genres.join(", ")}</h3>
                <h3>Language : {language} </h3>
            </div>

        </div>
    )
}

export default SingleMovie