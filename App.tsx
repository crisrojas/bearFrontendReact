import React from "react";
import { StatusBar } from "expo-status-bar";
import styled from "styled-components/native";
import { SafeAreaView, Text } from "react-native";
import NotesList from "./components/notes-list/notes-list";
import Colors from "./UI/colors";
import { useFonts } from "expo-font";
import Loader from "./components/loader";

export default function App() {
  const [fontsLoaded] = useFonts({
    "Avenir-Regular": require("./assets/fonts/Avenir/AvenirNextLTPro-Bold.otf"),
  });

  if (!fontsLoaded) {
    return <Text>Loading</Text>;
  } else {
    return (
      <Wrapper>
        <SafeAreaView>
          <NotesList />
          <StatusBar style="auto" />
        </SafeAreaView>
      </Wrapper>
    );
  }
}

const Wrapper = styled.View`
  background: ${Colors.background};
  height: 100%;
`;
