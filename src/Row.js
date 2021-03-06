import React, { useState, useEffect } from 'react';
import axios from './axios';
import './Row.css';
import movieTrailer from 'movie-trailer';

// the link to get the imgs
const base_url = 'https://image.tmdb.org/t/p/original';

function Row({ title, fetchUrl, isLargeRow }) {
  const [movies, setMovies] = useState([]);
  const [trailerUrl, setTrailerUrl] = useState('');

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchUrl);
      setMovies(request.data.results);
      // console.log(request.data.results);
      return request;
    }
    fetchData();
  }, [fetchUrl]);
  // if [], then it runs only once when the row loads, and won't run again
  // if [fetchUrl], it runs every time we call the row, and in this case it necessary because I'm passing it for outside the useEffect
  // console.table(movies);
  const handleClick = (movie) => {
    if (trailerUrl) {
      setTrailerUrl('');
    } else {
      movieTrailer(movie?.name || '')
        .then((url) => {
          const urlParams = new URLSearchParams(new URL(url).search);
          setTrailerUrl(urlParams.get('v'));
        })
        .catch((error) => console.log(error));
    }
  };
  return (
    <div className='row'>
      <h2>{title}</h2>
      <div className='row_posters'>
        {movies &&
          movies.map((movie) => (
            <img
              key={movie.id}
              onClick={handleClick(movie)}
              className={`row_poster ${isLargeRow && 'row_posterLarge'}`}
              src={`${base_url}${
                isLargeRow ? movie.poster_path : movie.backdrop_path
              }`}
              alt={movie.name}
            />
          ))}
      </div>
    </div>
  );
}

export default Row;
