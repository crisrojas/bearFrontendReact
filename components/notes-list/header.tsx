import React, { useState, useEffect } from "react";
import {
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  View,
} from "react-native";
import styled from "styled-components/native";
import Fonts from "../../UI/fonts";
import Colors from "../../UI/colors";
import HStack from "../../UI/hstack";
import Spacer from "../../UI/spacer";
import BurgerIcon from "../../assets/svgs/burger.svg.tsx";
import MaginfyIcon from "../../assets/svgs/magnifyglass.svg.tsx";

const SearchStack = (props) => {
  return (
    <View style={styles.searchStack}>
      <View style={styles.searchBar}>
        <View style={styles.searchBarIcon}>
          <MaginfyIcon width="10" strokeWidth="4" />
        </View>
        <TextInput
          style={styles.searchInput}
          onChangeText={props.onChangeText}
          value={props.value}
          selectionColor={Colors.searchFieldFocusedColor}
          placeholder="Buscar nota"
        />
      </View>
      <TouchableOpacity onPress={props.onCancelPress}>
        <Text style={styles.cancelButton}>Cancelar</Text>
      </TouchableOpacity>
    </View>
  );
};

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
        <MaginfyIcon onPress={didPressSearch} />
      </HStack>
      {/* <NoteCount>{props.length}</NoteCount> */}
      {showSearch && (
        <SearchStack
          value={searchText}
          onChangeText={onChangeSearchText}
          onCancelPress={() => setShowSearch(false)}
        />
      )}
    </HeaderWrapper>
  );
};

const styles = StyleSheet.create({
  searchStack: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
  },
  searchBar: {
    width: "80%",
    display: "flex",
    flexDirection: "row",
    backgroundColor: Colors.searchFieldBackground,
    borderRadius: 6,
    paddingLeft: 6,
  },
  searchBarIcon: {
    marginTop: 1,
  },
  searchInput: {
    height: 24,
    width: "90%",
    paddingLeft: 6,
    fontFamily: "Avenir-Regular",
  },
  cancelButton: {
    color: Colors.textBaseColor,
    fontFamily: "Avenir-Regular",
    fontSize: 12,
  },
});

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
