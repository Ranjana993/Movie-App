import React from 'react';
import "./DetailPage.css"
import { Link, useParams } from 'react-router-dom';
import useMovieData from '../../CustomHook/useMovieDate';

// url , officialSite , language , rating , status type  averageRuntime

const DetailPage = () => {
    const [movies] = useMovieData(); // Make sure useMovieData returns an array of movies
    const { id } = useParams();

    const targetShow = movies.find(movie => movie.show.id.toString() === id);
    console.log(targetShow)

    return (
        <div>
            {
                targetShow ? (
                    <div className='wrapper'>
                        <div className="image_container">
                            <img src={targetShow.show.image?.medium} alt="" />
                            <br />
                            <button className='btn'> <Link to={`/booking-page/${targetShow.show.id}`}> book ticket</Link> </button>
                        </div>
                        <div className="info_container">
                            <h1>{targetShow.show.name}</h1>
                            <p><span className='des'>Description : </span>  {targetShow.show.summary}</p>
                            <h3 className='genere'> {targetShow.show?.genres.join(", ")}</h3>
                            <h3><span className='h3'>Language :</span>  {targetShow.show.language} </h3>
                            <h3><span className='h3'>Schedule: </span> {targetShow.show?.schedule?.days[0]} {targetShow.show?.schedule?.time}</h3>
                            <h3><span className='h3'>Average Time to Complete : </span> {targetShow.show.averageRuntime} hours</h3>
                            <h3> <span className='h3'>Type : </span>  {targetShow.show.type}</h3>
                            <h3> <span className='h3'> Premired on :</span> {targetShow.show.premiered}</h3>
                            <div className="info_btns">
                                <button> <Link to={targetShow.show.officialSite}>officialSite </Link>  </button>
                                <button> <Link to={targetShow.show.url}> visit on main page  </Link>  </button>
                            </div>
                        </div>
                    </div>
                ) : (
                    <div>Show not found</div>
                )
            }
        </div>
    );
};





export default DetailPage