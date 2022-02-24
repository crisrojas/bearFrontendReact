import React from "react";
import { StatusBar } from "expo-status-bar";
import styled from "styled-components/native";
import { View, Text, StyleSheet } from "react-native";
import NotesList from "./components/notes-list/notes-list";
import Colors from "./UI/colors";
import { useFonts } from "expo-font";
import Loader from "./components/loader";
import { SafeAreaView } from "react-native-safe-area-context";

export default function App() {
  const [fontsLoaded] = useFonts({
    "Avenir-Regular": require("./assets/fonts/Avenir/AvenirNextLTPro-Regular.otf"),
    "Avenir-Medium": require("./assets/fonts/Metropolis-Medium.otf"),
  });

  if (!fontsLoaded) {
    return <Text>Loading fonts</Text>;
  } else {
    return (
      <SafeAreaView style={styles.container} edges={["top"]}>
        {/* <View styles={styles.container}> */}
        <StatusBar style="auto" />
        <NotesList />
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
  },
  // ,
  // text: {
  //   fontSize: 25,
  //   fontWeight: "500",
  // },
});
