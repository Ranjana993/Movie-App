import React from 'react'
import "./Book.css"
import useMovieData from '../../CustomHook/useMovieDate';
import { useParams } from 'react-router-dom';

const Book = () => {
    const [movies] = useMovieData(); // Make sure useMovieData returns an array of movies
    const { id } = useParams();

    const targetShow = movies.find(movie => movie.show.id.toString() === id);
    console.log(targetShow)


    return (
        <div className='booking-page'>
            <div className="booking-data">
                <h1>Book a Ticket 🚀</h1>
                <form>
                    <label htmlFor="movie-name" >Movie⭐ : </label><br />
                    <input type="text" value={targetShow?.show?.name} placeholder={targetShow?.show?.name} /><br />
                    <label htmlFor="name" >Full Name : </label><br />
                    <input type="text" placeholder='Enter your full name ' /><br />
                    <label htmlFor="name" >Email  : </label><br />
                    <input type="text" placeholder='Enter your emailID ' /><br />
                    <button>Book Now </button>
                </form>
            </div>

        </div>
    )
}

export default Book