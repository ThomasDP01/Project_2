import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import CreateNoteCard from "../components/CreateNoteCard";

const CreateScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <CreateNoteCard />
    </SafeAreaView>
  );
};

export default CreateScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "grey",
    alignItems: "center",
    justifyContent: "center",
    padding: 10,
    color: "white",
  },
});
