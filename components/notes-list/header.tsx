import React, { useState, useEffect } from "react";
import { Text, TextInput, TouchableOpacity, View } from "react-native";
import styled from "styled-components/native";
import Fonts from "../../UI/fonts";
import Colors from "../../UI/colors";
import HStack from "../../UI/hstack";
import Spacer from "../../UI/spacer";
import BurgerIcon from "../../assets/svgs/burger.svg.tsx";
import MaginfyIcon from "../../assets/svgs/magnifyglass.svg.tsx";

const Header = (props) => {
  const didPressMenu = () => {
    console.log("Did press menu");
  };

  const didPressSearch = () => {
    setShowSearch(!showSearch);
  };

  const [showSearch, setShowSearch] = useState(false);
  const [searchText, onChangeSearchText] = useState("");

  return (
    <HeaderWrapper>
      <HStack>
        <BurgerIcon onPress={didPressMenu} />
        <Spacer />
        <HeaderLabel>Notes</HeaderLabel>
        <Spacer />
        <MagnifyComponent>
          <MagnifyInversed>
            <MaginifyBackground height={props.scrollOffset} />
            <MaginfyIcon color={"white"} onPress={props.onSearchPress} />
          </MagnifyInversed>
          <MagnifyRegular>
            <MaginfyIcon onPress={props.onSearchPress} />
          </MagnifyRegular>
        </MagnifyComponent>
      </HStack>
    </HeaderWrapper>
  );
};

const MagnifyComponent = styled.View`
  position: relative;
  /* display: flex; */
  justify-content: center;
  /* align-items: center; */
  /* border-radius: 15px; */
  width: 30px;
  height: 30px;
  /* padding: 6px; */
  overflow: hidden;
`;

const MagnifyRegular = styled.View`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;
const MagnifyInversed = styled.View`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;

const MaginifyBackground = styled.View`
  position: absolute;
  background: ${Colors.searchFieldFocusedColor};
  bottom: 0;
  left: 0;
  width: 100%;
  height: ${(props) => (props.height ? props.height + "%" : 0 + "%")};
`;

const HeaderWrapper = styled.View`
  padding: 20px 12px;
  color: ${Colors.textBaseColor};
`;

const HeaderLabel = styled.Text`
  font-family: "Avenir-Medium"
  text-transform: uppercase;
  color: ${Colors.textBaseColor};
`;

const NoteCount = styled.Text`
  color: ${Colors.textBaseColor};
  text-align: center;
  padding: 12px;
`;

export default Header;
