import React from "react";
import {
  Avatar,
  HeaderContainer,
  UserText,
  Title,
  Year
} from "/Users/Michaelseraus/fullStackDev/FFB/react-cards/src/Styles/Styles";

const HeaderInfo = ({ avatar, title, subtitle, year }) => {
  return (
    <HeaderContainer>
      <Avatar src={avatar} />
      <UserText>{subtitle}</UserText>
      <Title>{title}</Title>
      <Year>{year}</Year>
    </HeaderContainer>
  );
};

export default HeaderInfo;
