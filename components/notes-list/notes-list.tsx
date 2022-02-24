import React, { useState, useEffect } from "react";
import { ScrollView, View, Text, StyleSheet } from "react-native";
import styled from "styled-components/native";
import Note from "./note";
import Fonts from "../../UI/fonts";
import Colors from "../../UI/colors";
import Header from "./header";
import HStack from "../../UI/hstack";
import VStack from "../../UI/vstack";

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.background,
  },
});

const NotesList = () => {
  const [selectedId, setSelectedId] = useState(0);

  const didSelectNote = () => {
    /* @todo: Fetch & show note content from id */
  };

  useEffect(() => {
    didSelectNote();
  }, [selectedId]);

  return (
    <ScrollView style={styles.container}>
      <Header length={model.length} />

      {model.map((item, index) => (
        <Note
          key={index}
          onPress={() => setSelectedId(item.id)}
          modifiedSince={item.modifiedSince}
          title={item.title}
          summary={item.summary}
          pinned={item.pinned}
          isSelected={item.id == selectedId}
          thumbnailUri={item.thumbnailUri}
        />
      ))}

      <EmptyView />
    </ScrollView>
  );
};

export default NotesList;

const setTitleWith = (id) => {
  if (id % 2 === 0) {
    return longTitle;
  } else if (id % 3 === 0) {
    return reallyLongTitle;
  } else {
    return shortTitle;
  }
};

const makeSummaryWith = (noteTitle, summary) => {
  if (noteTitle.length <= 62) {
    return summary.substring(0, 62);
  } else {
    return null;
  }
};

const makeThumbnailListWith = (index) => {
  if (index % 4 === 0) {
    return [
      "https://www.lesformationstrading.fr/wp-content/uploads/2021/09/bear-bourse.png",
      "https://images.squarespace-cdn.com/content/v1/5e768ec11f1ca16b9845e45b/1585108253672-YW6K7ARO8EGJERC8U9UN/_PBR7307.jpg",
    ];
  } else {
    return null;
  }
};

const EmptyView = styled.View`
  height: 30;
`;

const reallyLongTitle =
  "This is a really long title that will not fit in three lines. Seariously, this is as long as a jiraffles neck, long.";
const longTitle =
  "This is a very long title that will not fit in a single line";
const shortTitle = "This is a short title";

const summary =
  "This is the notes summary and it will not fit in two lines so I've to continue writing until that happens, ok?";
const model = Array.from(new Array(20)).map(function (value, index) {
  return {
    id: index,
    modifiedSince: index + "S",
    title: setTitleWith(index),
    summary: makeSummaryWith(setTitleWith(index), summary),
    pinned: index % 2 === 0,
    // @todo: render only if index % 3 === 0
    thumbnailUri: makeThumbnailListWith(index),
  };
});
