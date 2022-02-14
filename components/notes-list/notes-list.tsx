import React from "react";
import { SafeAreaView, Text, View } from 'react-native';
import styled from "styled-components";
import Note from './note'

const NotesList = () => {
  return (
	<SafeAreaView>
	  <Text>Hi, I'm a notes list</Text>
 	 	<Note/>
	</SafeAreaView>
  )
}
export default NotesList;