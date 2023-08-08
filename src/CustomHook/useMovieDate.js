import { useEffect, useState } from "react";

const useMovieData = () => {
    const [movie, setMovie] = useState([])


    const getData = async () => {
        const res = await fetch("https://api.tvmaze.com/search/shows?q=all");
        const data = await res.json();
        // console.log("data => ", data)
        setMovie(data)
    }


    useEffect(() => {
        getData()
    }, [])


    return [movie]
}

export default useMovieData