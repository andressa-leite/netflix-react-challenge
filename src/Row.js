import React from "react";
import { useEffect, useState } from "react";
import "./Row.css";
import axios from "./axios";

function Row({ title, fetchUrl, isLargeRow = false }) {
  const [movies, setMovies] = useState([]);
  const base_url = "https://image.tmdb.org/t/p/original/";

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchUrl);
      setMovies(request.data.results);
      return request;
    }
    fetchData();
  }, [fetchUrl]);

  return (
    <div className="row">
      <h2>{title}</h2>

      <div className="row_posters">
        {movies.map((movie) => (
          //abaixo é um IF
          //If i'ts a largeRow and the poster_path exists or if it's NOT a largeRow and backdrop_path exists then render
          ((isLargeRow && movie.poster_path) ||
          (!isLargeRow && movie.backdrop_path)) && (
            <img
            className={`row_poster ${isLargeRow && "row_posterLarge"}`}
            key={movie.id}
            src={`${base_url}${
              isLargeRow ? movie.poster_path : movie.backdrop_path
            }`}
            alt={movie.name}
            />        
          )
        ))}
      </div>
    </div>
  );
}

export default Row;
