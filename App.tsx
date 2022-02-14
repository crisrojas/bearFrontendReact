import React from "react";
import { StatusBar } from 'expo-status-bar';
import styled from 'styled-components/native';
import { SafeAreaView } from 'react-native';
import { NativeBaseProvider } from 'native-base';
import NotesList from './components/notes-list/notes-list.tsx'
import Colors from './UI/colors'


export default function App() {
  // 2. Use at the root of your app
  return (
    <NativeBaseProvider>
     <Wrapper>
       <SafeAreaView>
         <NotesList/>
         <StatusBar style="auto" />
       </SafeAreaView>
       </Wrapper>
    </NativeBaseProvider>
  );
}


const Wrapper = styled.View`
  background: ${Colors.background}
  height: 100vh;
`;