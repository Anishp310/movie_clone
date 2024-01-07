import { useEffect, useRef, useState } from "react";
import GlobalApi from "../Services/GlobalApi";
const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/w500";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa6";
const screenWidth = window.innerWidth;

const Slider = () => {
  const [movieList, setMovieList] = useState([]);
  useEffect(() => {
    getTrendingMovies();
  }, []);
  const getTrendingMovies = () => {
    GlobalApi.getTrendingVideos.then((resp) => {
      console.log(resp.data.results);
      setMovieList(resp.data.results);
    });
  };
  const elemRef = useRef();

  const sliderRight = (element) => {
    element.scrollLeft += screenWidth - 110;
  };
  const sliderLeft = (element) => {
    element.scrollLeft -= screenWidth - 110;
  };

  return (
    <div>
      <FaAngleLeft
        className="hidden md:block text-white text-[30px] absolute mt-[170px] "
        onClick={() => sliderLeft(elemRef.current)}
      />
      <FaAngleRight
        className="hidden md:block text-white  text-[30px] absolute mt-[170px] right-0"
        onClick={() => sliderRight(elemRef.current)}
      />
      <div
        className="flex overflow-x-auto px-14 py-4 scrollbar-none scroll-smooth"
        ref={elemRef}
      >
        {movieList.map((item, index) => (
          <img
            key={index}
            src={IMAGE_BASE_URL + item.backdrop_path}
            alt="img"
            className="min-w-full md:h-[350px] object-cover object-top mr-5 hover:border-[4px] border-gray-300 transition-all duration-100 ease-in-out "
          />
        ))}
      </div>
    </div>
  );
};

export default Slider;
