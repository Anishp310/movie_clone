import React from "react";
const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/w500";
const MovieCard = ({ movie }) => {
  return (
    < >
      <img src={IMAGE_BASE_URL + movie.poster_path}
      className="w-[110px] md:w-[220px] rounded-lg hover:border-[3px] border-gray-300 hover:scale-110 transition-all duration-150 ease-in cursor-pointer " /> 
    </>
  );
};

export default MovieCard;
