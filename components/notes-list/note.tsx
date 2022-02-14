import React from "react";
import { Text, View } from 'react-native';
import styled from "styled-components/native";
import Colors from "../../UI/colors"
import { NativeBaseProvider, Box, HStack, VStack} from "native-base";
import PinnedIcon from '../../assets/pinned.svg.tsx'

interface NoteModel {
	title: String
	summary: String
	lastTime: String
	pinned: Bool
}

const Note = (props) => {
	return (
		  <NoteWrapper>
			  <HStack space={3} justifyContent="left">
				<VStack space={2}>
					<Text>{props.lastTime}</Text>
					
					
					<Text><PinnedIcon/></Text>
					
					
				</VStack>
				
				<VStack space={3}>
					  <Text>{props.title}</Text>
					  <Text>{props.summary}</Text>
				  </VStack>
				</HStack>
		  </NoteWrapper>
	)
}

export default Note

const NoteWrapper = styled.View`
	
`;

 const CustomText = styled.Text`
 color: ${Colors.primary}
`; 