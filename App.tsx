import React from "react";
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import styled from 'styled-components/native';
import NotesList from './components/notes-list/notes-list.tsx'

export default function App() {
  return (
    <View>
      <NotesList/>
      <StatusBar style="auto" />
    </View>
  );
}

const Test = styled.Text``;