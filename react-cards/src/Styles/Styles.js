import styled from "styled-components";

export const Cards = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
`;

export const Card = styled.div`
  height: 504px;
  width: 504px;
  position: relative;
  margin-bottom: 1rem;
`;

export const CardImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const Avatar = styled.img`
  height: auto;
  width: auto;
`;

export const HeaderContainer = styled.div`
  position: absolute;
  top: 27px;
  left: 20px;
  margin: 1.3rem;
`;

export const UserText = styled.p`
  color: #a7a7a7;
  font-size: 18px;
`;

export const Title = styled.h1`
  color: white;
  margin: -10px 0px;
`;

export const Year = styled(UserText)``;

export const Poster = styled(Avatar)`
  position: absolute;
  top: 250px;
  left: 20px;
  margin: 1.3rem;
`;

export const InfoContainer = styled.div`
  height: 166px;
  width: 242px;
  position: absolute;
  top: 328px;
  left: 190px;
`;

export const ScoreContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: flex-end;
  width: 122px;
`;

export const IMBD = styled(Avatar)``;

export const Score = styled(Avatar)`
  width: 51px;
  height: 21px;
`;

export const CastInfo = styled.div`
  display: grid;
  grid-template-columns: 22% 55%;
  grid-template-rows: 20% 80%;
  margin-top: 1rem;
`;

export const GreyText = styled(UserText)`
  font-size: 15px;
  margin-bottom: -8px;
`;

export const WhiteText = styled(UserText)`
  font-size: 15px;
  margin-bottom: -8px;
  color: white;
  margin-left: 5px;
`;
