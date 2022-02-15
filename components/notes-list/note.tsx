import React, { useState, useEffect } from "react";
import { Text, View  } from 'react-native';
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
	
	const didSelectNote = () => {
		console.log('You selected the note')
	}
	
	const [active, setActive] = useState(false)
	
	useEffect(() => {
		didSelectNote()
	}, [active])
	
		return (
				<NoteWrapper 
				onClick={() => setActive(!active)}
				active={active}
				>
					
					  <HStack space={3} justifyContent="left">
						<VStack space={3}>
							<Text>{props.lastTime}</Text>
							<Text><PinnedIcon/></Text>
							
							
						</VStack>
						
						<VStack space={2}>
							  <Text>{props.title}</Text>
							  <Text>{props.summary}</Text>
							  <Separator></Separator>
						  </VStack>
						</HStack>
						
			</NoteWrapper>
		)
	
}

export default Note

const NoteWrapper = styled.View`
	border-style: solid; 
	border-left-width: 5px;
	border-left-color:  ${props => props.active ?  Colors.noteCellSelectedBorderColor : Colors.background};
	backgroundColor: ${props => props.active ? Colors.noteCellSelectedBgColor :  Colors.background};
	padding-left: 20px;
	padding-top: 12px;
`;

const Separator = styled.View`
	height: 1px;
	width: 100%;
	background: black;
	margin-top: 12px;
`;