import React from "react";
import { SafeAreaView, Text, View } from 'react-native';
import styled from "styled-components";
import Note from './note'

const NotesList = () => {
  return (
	  <View>
	  <Text>Hi, I'm a notes list</Text>
 	 	<Note 
		  lastTime="3S" 
		  title="Note title" 
		  summary="Note summary"
		  pinned="true"
		/>
	  </View>
  )
}

export default NotesList;