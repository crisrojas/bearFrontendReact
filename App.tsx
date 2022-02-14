import React from "react";
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import styled from 'styled-components/native';

export default function App() {
  return (
    <View>
      <Text>Test</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const Test = styled.Text``;