import React, { useState, useEffect } from "react";
import { View, TouchableWithoutFeedback  } from 'react-native';
import styled from "styled-components/native";
import Colors from "../../UI/colors"
import { NativeBaseProvider, Box, HStack, VStack} from "native-base";
import PinnedIcon from '../../assets/pinned.svg.tsx'

interface NoteModel {
	title: String
	summary: String
	modifiedSince: String
	pinned: Bool
}

const Note = (props) => {

	return (
		<TouchableWithoutFeedback onPress={props.onPress}>
			<NoteWrapper
			isSelected={props.isSelected}>
			
				  <HStack space={3} justifyContent="left">
					<VStack space={3}>
						<Text>{props.modifiedSince}</Text>
						
						<Text><PinnedIcon/></Text>
					</VStack>
					
					<VStack space={2}>
						  <Title>{props.title}</Title>
						  <Text>{props.summary}</Text>
						  <Separator></Separator>
					  </VStack>
			
					</HStack>
					
		</NoteWrapper>
		</TouchableWithoutFeedback>
	)
}

export default Note

const Title = styled.Text`
	font-family: 'AvenirNextLTPro-Bold'
	color: ${Colors.titleTextColor}
`

const Text = styled.Text`
	color: ${Colors.textBaseColor}
`

const NoteWrapper = styled.View`
	border-style: solid; 
	border-left-width: 6px;
	border-left-color:  ${props => props.isSelected ?  Colors.noteCellSelectedBorderColor : Colors.background};
	backgroundColor: ${props => props.isSelected ? Colors.noteCellSelectedBgColor :  Colors.background};
	padding-left: 20px;
	padding-top: 12px;
	transition: 0.5s;
`;

const Separator = styled.View`
	height: 1px;
	width: 100%;
	background: ${Colors.separatorColor};
	margin-top: 12px;
`;