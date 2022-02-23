import React, { useState, useEffect } from "react";
import { ScrollView, View, Text } from "react-native";
import styled from "styled-components/native";
import Note from "./note";
import Fonts from "../../UI/fonts";
import Colors from "../../UI/colors";
import Header from "./header";
import HStack from "../../UI/hstack";
import VStack from "../../UI/vstack";

const NotesList = () => {
  const [selectedId, setSelectedId] = useState("0");

  const didSelectNote = () => {
    /* @todo: Fetch & show note content from id */
  };

  useEffect(() => {
    didSelectNote();
  }, [selectedId]);

  return (
    <ScrollView style={{ height: "100%" }}>
      {/* <Header length={items.length} /> */}

      {items.map((item, index) => (
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
    </ScrollView>
  );
};

export default NotesList;

const items = [
  {
    id: "1",
    modifiedSince: "3S",
    title: "Note title",
    summary: "Note summary",
    pinned: "true",
    thumbnailUri:
      "https://www.lesformationstrading.fr/wp-content/uploads/2021/09/bear-bourse.png",
  },
  {
    id: "2",
    modifiedSince: "3S",
    title: "Note title",
    summary: "Note summary",
    pinned: "true",
  },
  {
    id: "3",
    modifiedSince: "3S",
    title: "Note title",
    summary: "Note summary",
    pinned: "false",
    thumbnailUri:
      "https://files.worldwildlife.org/wwfcmsprod/images/Polar_bear_on_ice_in_Svalbard_Norway_WW294883/hero_small/85px6g3dhv_Polar_bear_on_ice_in_Svalbard_Norway_WW294883.jpg",
  },
  {
    id: "4",
    modifiedSince: "3S",
    title: "Note title",
    summary: "Note summary",
    pinned: "false",
  },
  {
    id: "5",
    modifiedSince: "3S",
    title: "Note title",
    summary: "Note summary",
    pinned: "false",
  },
  {
    id: "6",
    modifiedSince: "3S",
    title: "Note title",
    summary: "Note summary",
    pinned: "false",
  },
  {
    id: "7",
    modifiedSince: "3S",
    title: "Note title",
    summary: "Note summary",
    pinned: "false",
  },
  {
    id: "8",
    modifiedSince: "3S",
    title: "Note title",
    summary: "Note summary",
    pinned: "false",
  },
];
