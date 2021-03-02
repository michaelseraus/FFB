import data from "./Components/MovieCard/MovieData.json";
import MovieCard from "./Components/MovieCard/MovieCard";
import { Cards } from "./Styles/Styles";

function App() {
  return (
    <Cards>
      {data.map((movie) => (
        <MovieCard
          avatar={movie.avatar}
          subtitle={movie.watching}
          title={movie.title}
          image={movie.image}
          imdb={movie.imdb}
          score={movie.score}
          director={movie.director}
          stars={movie.stars}
          poster={movie.poster}
          year={movie.year}
        />
      ))}
    </Cards>
  );
}

export default App;
