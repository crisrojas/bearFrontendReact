import React, { useState, useEffect } from "react";
import { Text } from "react-native";
import styled from "styled-components/native";
import Fonts from "../../UI/fonts";
import Colors from "../../UI/colors";
import HStack from "../../UI/hstack";
import Spacer from "../../UI/spacer";
import BurgerIcon from "../../assets/svgs/burger.svg";
import MaginfyIcon from "../../assets/svgs/magnifyglass.svg";

const Header = (props) => {
  return (
    <HeaderWrapper>
      <NoteCount>{props.length}</NoteCount>
    </HeaderWrapper>
  );
};

const HeaderWrapper = styled.View`
  padding-left: 26px;
  padding-right: 26px;
  padding-top: 20px;
  padding-bottom: 20px;
  /* font-family: ${Fonts.regular} */
  color: ${Colors.textBaseColor};
`;

const StackContainer = styled.View``;

const HeaderLabel = styled.Text`
  /* font-family: ${Fonts.regular} */
  text-transform: uppercase;
  color: ${Colors.textBaseColor};
`;

const NoteCount = styled.Text`
  /* font-family: ${Fonts.regular} */
  color: ${Colors.textBaseColor};
  text-align: center;
  padding: 12px;
`;

export default Header;
