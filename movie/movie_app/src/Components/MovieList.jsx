import React, { useEffect, useRef, useState } from "react";
import GlobalApi from "../Services/GlobalApi";
import MovieCard from "./MovieCard";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa6";
import HrMovieCard from "./HrMovieCard";
const MovieList = ({ genreId, index_ }) => {
  const [movieList, setMovieList] = useState([]);
  useEffect(() => {
    getMovieByGenreId();
  }, []);

  const getMovieByGenreId = () => {
    GlobalApi.getMoviesByGenereId(genreId).then((res) => {
      //console.log(res.data.results);
      setMovieList(res.data.results);
    });
  };
  const elemRef = useRef();

  const sliderRight = (element) => {
    element.scrollLeft += 500;
  };
  const sliderLeft = (element) => {
    element.scrollLeft -= 500;
  };
  return (
    <div className="relative">
      <FaAngleLeft
        className={`hidden md:block text-white text-[50px] absolute z-10 p-2 cursor-pointer *
        ${index_ % 3 == 0 ? "mt-[70px]" : "mt-[150px]"}`}
        onClick={() => sliderLeft(elemRef.current)}
      />
      <div
        className="flex overflow-x-auto gap-8 scrollbar-none scroll-smooth pt-5 px-3 pb-5"
        ref={elemRef}
      >
        {movieList.map((item, index) => (
          <>
            {index_ % 3 == 0 ? (
              <HrMovieCard movie={item} />
            ) : (
              <MovieCard movie={item} />
            )}
          </>
        ))}
      </div>
      <FaAngleRight
        className={`hidden md:block text-white text-[50px] absolute z-10 p-2 cursor-pointer right-0 top-0
        ${index_ % 3 == 0 ? "mt-[70px]" : "mt-[150px]"}`}
        onClick={() => sliderRight(elemRef.current)}
      />
    </div>
  );
};

export default MovieList;
