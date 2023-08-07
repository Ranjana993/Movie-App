import React from 'react'
import "./Home.css"
import SingleMovie from '../SingleMovie/SingleMovie';
import { Link } from 'react-router-dom';
import useMovieData from '../../CustomHook/useMovieDate';




const Home = () => {
  const [movie] = useMovieData()

  return (
    <>
      <div className="container">
        <h1>Welcome to movie Store </h1>
        <div className="cards">
          {
            movie.map((item) => (
              <Link to={`/detailed/${item?.show.id}`} key={item.score}>
                <SingleMovie {...item?.show} />
              </Link>
            ))
          }
        </div>
      </div>
    </>
  )
}

export default Home