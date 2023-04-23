import {
  View,
  Text,
  StyleSheet,
  Button,
  FlatList,
  StatusBar,
} from "react-native";
import React from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { setTitle, setMessage } from "../slices/noteSlice";
import { selectNoteTitle, selectNoteMessage } from "../slices/noteSlice";
import { useNavigation } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";

const DATA = [
  {
    id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
    title: "First Item",
  },
  {
    id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
    title: "Second Item",
  },
  {
    id: "58694a0f-3da1-471f-bd96-145571e29d72",
    title: "Third Item",
  },
];

const Item = ({ title }) => (
  <View style={styles.item}>
    <Text style={styles.title}>{title}</Text>
    <Text>test text</Text>
  </View>
);

const NoteCard = () => {
  const dispatch = useDispatch();
  const noteTitle = useSelector(selectNoteTitle);
  const noteMessage = useSelector(selectNoteMessage);

  const navigation = useNavigation();
  return (
    <SafeAreaView>
      <View>
        <Text>Here are your notes</Text>
      </View>
      <View>
        <FlatList
          data={DATA}
          renderItem={({ item }) => <Item title={item.title} />}
          keyExtractor={(item) => item.id}
        />

        <Button
          onPress={() => navigation.navigate("CreateScreen")}
          title="Create Note"
          color="#841584"
          accessibilityLabel="Learn more about this purple button"
        />
      </View>
    </SafeAreaView>
  );
};

export default NoteCard;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "grey",
    alignItems: "center",
    justifyContent: "center",
    padding: 10,
    color: "white",
  },
  item: {
    backgroundColor: "#f9c2ff",
    padding: 30,
    marginVertical: 6,
  },
  title: {
    fontSize: 20,
  },
});
