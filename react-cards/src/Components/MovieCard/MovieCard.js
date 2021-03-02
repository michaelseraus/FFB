import React from "react";
import HeaderInfo from "./HeaderInfo";
import MovieInfo from "./MovieInfo";
import {
  Card,
  CardImage,
  Poster
} from "/Users/Michaelseraus/fullStackDev/FFB/react-cards/src/Styles/Styles";

const MovieCard = ({
  image,
  poster,
  avatar,
  subtitle,
  title,
  year,
  director,
  stars,
  imdb,
  score
}) => {
  return (
    <Card>
      <CardImage src={image} />
      <HeaderInfo avatar={avatar} subtitle={subtitle} title={title} year={year} />
      <Poster src={poster} />
      <MovieInfo imdb={imdb} score={score} director={director} stars={stars} />
    </Card>
  );
};

export default MovieCard;
