import React, { useState, useEffect } from "react";
import { View, TouchableWithoutFeedback, Image, StyleSheet } from 'react-native';
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

const styles = StyleSheet.create({
  tinyLogo: {
	width: 138,
	height: 85,
	borderWidth: "1px",
	borderColor: Colors.separatorColor
  }
});


const Note = (props) => {

	return (
		<TouchableWithoutFeedback onPress={props.onPress}>
			<NoteWrapper
			isSelected={props.isSelected}
			/*style={{ height: "200px"}}*/
			>
			
				  <HStack space={3} justifyContent="left">
					<VStack space={3}>
						<Text>{props.modifiedSince}</Text>
						
						<Text><PinnedIcon/></Text>
					</VStack>
					
					<VStack space={2} style={{ width: "100%" }}>
						  <Title>{props.title}</Title>
						  <Text>{props.summary}</Text>
						  {props.thumbnailUri && 
							  <Image
								   style={styles.tinyLogo}
								   source={{
									 uri: props.thumbnailUri,
								   }}
								 />
						  }
						
						  <Separator></Separator>
					  </VStack>
			
					</HStack>
					
		</NoteWrapper>
		</TouchableWithoutFeedback>
	)
}

export default Note

const Title = styled.Text`
	font-family: 'Metropolis-Medium';
	color: ${Colors.titleTextColor}
`

const Text = styled.Text`
	font-family: 'AvenirNextLTPro-Regular';
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