import React, { useState, useEffect } from "react";
import {
  View,
  TouchableWithoutFeedback,
  Image,
  StyleSheet,
} from "react-native";
import styled from "styled-components/native";
import Colors from "../../UI/colors";
// import { HStack, VStack } from "native-base";
import HStack from "../../UI/hstack";
import PinnedIcon from "../../assets/svgs/pinned.svg.tsx";
import Spacer from "../../UI/spacer";

const styles = StyleSheet.create({
  tinyLogo: {
    width: 138,
    height: 85,
    borderWidth: 1,
    borderColor: Colors.separatorColor,
  },
});

const Note = (props) => {
  return (
    <TouchableWithoutFeedback onPress={props.onPress}>
      <NoteWrapper isSelected={props.isSelected}>
        <HStack>
          <VStack>
            <Text>{props.modifiedSince}</Text>

            <Text>pin</Text>
          </VStack>

          <VStack>
            <Title>{props.title}</Title>
            <Text>{props.summary}</Text>
            {props.thumbnailUri && (
              <Image
                style={styles.tinyLogo}
                source={{
                  uri: props.thumbnailUri,
                }}
              />
            )}
          </VStack>
        </HStack>
      </NoteWrapper>
    </TouchableWithoutFeedback>
  );
};

export default Note;

const Title = styled.Text`
  /* font-family: "Metropolis-Medium"; */
  color: ${Colors.titleTextColor};
`;

const Text = styled.Text`
  /* font-family: "AvenirNextLTPro-Regular"; */
  color: ${Colors.textBaseColor};
`;

const NoteWrapper = styled.View`
  border-style: solid;
  border-left-width: 6px;

  background-color: ${(props) =>
    props.isSelected ? Colors.noteCellSelectedBgColor : Colors.background};
  border-left-color: ${(props) =>
    props.isSelected ? Colors.noteCellSelectedBorderColor : Colors.background};

  padding-left: 20px;
  padding-top: 12px;
  min-height: 100px;
`;

const Separator = styled.View`
  height: 1px;
  width: 100%;
  background: ${Colors.separatorColor};
`;

const VStack = styled.View`
  display: flex;
  align-self: stretch;
  flex: 1 1 auto;
  flex-direction: column;
`;
