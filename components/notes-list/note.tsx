import React, { useState, useEffect } from "react";
import {
  View,
  TouchableWithoutFeedback,
  Image,
  StyleSheet,
} from "react-native";
import styled from "styled-components/native";
import Colors from "../../UI/colors";
import HStack from "../../UI/hstack";
import PinnedIcon from "../../assets/svgs/pinned.svg.tsx";
import Spacer from "../../UI/spacer";

const ThumbnailView = (props) => {
  return (
    <HStack style={{ marginTop: 12 }}>
      {props.uris.map((uri, index) => (
        <Image
          style={styles.thumbnail}
          source={{
            uri: uri,
          }}
        />
      ))}
    </HStack>
  );
};

export const Note = (props) => {
  return (
    <TouchableWithoutFeedback onPress={props.onPress}>
      <NoteWrapper isSelected={props.isSelected}>
        <HStack>
          <VStack style={styles.metaDataStack}>
            <Text style={styles.lastTimeLabel}>{props.modifiedSince}</Text>

            {props.pinned && <PinnedIcon />}
          </VStack>

          <VStack style={styles.contentStack}>
            <Title style={styles.noteTitle}>{props.title}</Title>
            {props.summary && (
              <Text style={styles.summary}>{props.summary}</Text>
            )}

            {props.thumbnailUri && <ThumbnailView uris={props.thumbnailUri} />}

            <Spacer />
            <Separator />
          </VStack>
        </HStack>
      </NoteWrapper>
    </TouchableWithoutFeedback>
  );
};

export default Note;

// Styles

// 1/2 Stylesheet
const styles = StyleSheet.create({
  metaDataStack: {
    alignItems: "center",
    width: 28,
  },
  noteTitle: {
    paddingRight: 50,
  },
  lastTimeLabel: {
    marginTop: 3,
    marginBottom: 16,
  },
  summary: {
    marginTop: 12,
    paddingRight: 50,
  },
  contentStack: {
    marginLeft: 8,
    width: "100%",
    minHeight: 80,
  },
  thumbnail: {
    width: 115,
    height: 65,
    borderWidth: 1,
    borderColor: Colors.separatorColor,
    marginRight: 8,
  },
});

// 2/2 Styled components
const Title = styled.Text`
  font-family: "Avenir-Medium";
  color: ${Colors.titleTextColor};
`;

const Text = styled.Text`
  font-family: "Avenir-Regular";
  color: ${Colors.textBaseColor};
`;

const NoteWrapper = styled.View`
  border-style: solid;
  border-left-width: 6px;

  background-color: ${(props) =>
    props.isSelected ? Colors.noteCellSelectedBgColor : Colors.background};
  border-left-color: ${(props) =>
    props.isSelected ? Colors.noteCellSelectedBorderColor : Colors.background};

  padding-left: 2px;
  padding-top: 12px;
  display: flex;
  flex-direction: column;
  align-items: stretch;
`;

const Separator = styled.View`
  height: 1px;
  width: 100%;
  background: ${Colors.separatorColor};
  margin-top: 12px;
`;

const VStack = styled.View`
  display: flex;
  align-self: stretch;
  /* flex: 1 1 auto; */
  flex-direction: column;
`;
