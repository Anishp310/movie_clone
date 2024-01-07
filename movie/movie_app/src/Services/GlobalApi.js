import axios from "axios";

const movieBaseUrl = "https://api.themoviedb.org/3";
const api_key = "a6c7a5869fd041ea9fe9f222272ef51e";

const movieByGenereBaseUrl =
  "https://api.themoviedb.org/3/discover/movie?api_key=a6c7a5869fd041ea9fe9f222272ef51e";

//https://api.themoviedb.org/3/genre/movie/list?api_key=a6c7a5869fd041ea9fe9f222272ef51e

//https://api.themoviedb.org/3/trending/movie/day?api_key=a6c7a5869fd041ea9fe9f222272ef51e

const getTrendingVideos = axios.get(
  movieBaseUrl + "/trending/movie/day?api_key=" + api_key
);

const getMoviesByGenereId = (id) =>
  axios.get(movieByGenereBaseUrl + "&with_genres=" + id);

export default {
  getTrendingVideos,
  getMoviesByGenereId,
};
