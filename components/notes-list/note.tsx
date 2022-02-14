import React from "react";
import { Text, View } from 'react-native';
import styled from "styled-components/native";
import Colors from "../../UI/colors"

const Note = () => {
	return (
		<View><CustomText>Testing</CustomText></View>
	)
}

export default Note

 const CustomText = styled.Text`
 color: ${Colors.primary}
`; 