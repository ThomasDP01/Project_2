import { View, Text, TextInput, Button, StyleSheet } from "react-native";
import React from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { setTitle, setMessage } from "../slices/noteSlice";
import { selectNoteTitle, selectNoteMessage } from "../slices/noteSlice";
import { useNavigation } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";

const CreateNoteCard = () => {
  const dispatch = useDispatch();
  const noteTitle = useSelector(selectNoteTitle);
  const noteMessage = useSelector(selectNoteMessage);

  const navigation = useNavigation();
  const text = "";

  return (
    <SafeAreaView>
      <View>
        <Text>Create your note Here!!</Text>
      </View>

      <View>
        <Text>What would you like your note title to be?</Text>
        <TextInput
          maxLength={50}
          placeholder={noteTitle}
          onEndEditing={(newTitle) => {
            dispatch(setTitle(newTitle));
          }}
        />
        <Text>Title is {noteTitle}</Text>
      </View>

      <View>
        <Button
          onPress={() => navigation.navigate("NoteScreen")}
          title="submit"
          color="#841584"
          accessibilityLabel="Learn more about this purple button"
        />
      </View>
    </SafeAreaView>
  );
};

export default CreateNoteCard;

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});
