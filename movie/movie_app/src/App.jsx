import GenreMoviesList from "./Components/GenreMoviesList";
import { Header } from "./Components/Header";
import ProductionHouse from "./Components/ProductionHouse";
import Slider from "./Components/Slider";
import "./App.css"

export default function App() {
  return (
    <div className="">
      <Header />
      <Slider />
      <ProductionHouse />
      <GenreMoviesList />
    </div>
  );
}
