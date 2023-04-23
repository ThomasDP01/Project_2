import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import NoteCard from "../components/NoteCard";

const NoteScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <NoteCard />
    </SafeAreaView>
  );
};

export default NoteScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "grey",
    alignItems: "center",
    justifyContent: "center",
    padding: 10,
  },
});
