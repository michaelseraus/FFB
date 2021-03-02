import React from "react";
import {
  InfoContainer,
  IMBD,
  Score,
  ScoreContainer,
  CastInfo,
  GreyText,
  WhiteText
} from "/Users/Michaelseraus/fullStackDev/FFB/react-cards/src/Styles/Styles";

const MovieInfo = ({ imdb, score, director, stars }) => {
  console.log(imdb);
  return (
    <InfoContainer>
      <ScoreContainer>
        <IMBD src={imdb} />
        <Score src={score} />
      </ScoreContainer>
      <CastInfo>
        <GreyText>Director: </GreyText>
        <WhiteText>{director}</WhiteText>
        <GreyText>Stars:</GreyText>
        <WhiteText>{stars}</WhiteText>
      </CastInfo>
    </InfoContainer>
  );
};

export default MovieInfo;
