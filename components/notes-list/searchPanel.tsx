import React from "react";
import SearchStack from "./searchstack";
import { Text, View } from "react-native";
import styled from "styled-components";
import Colors from "../../UI/colors";
const SearchPanelComponent = (props) => {
  return (
    <View>
      <SearchStack onCancelPress={props.onCancelPress} />
    </View>
  );
};

export default SearchPanelComponent;

const SearchPanel = styled.View`
  background-color: ${Colors.background80};
  height: 100%;
  width: 100%;
  padding-top: 20px;
  position: absolute;
`;
