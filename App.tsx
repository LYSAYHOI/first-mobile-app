import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  TextInput,
  StatusBar,
  ScrollView
} from "react-native";

export default function App() {
  const [listItems, setListItems] = useState([]);
  const [textChanged, setTextChange] = useState("");

  const onChange = textChanged => {
    setTextChange(textChanged);
  };

  const onAddItem =() => {
    if(textChanged !== "") {
      setListItems(prevState => [...prevState, textChanged]);
    }
  }

  return (
    <View style={styles.root}>
      <StatusBar barStyle="dark-content" />
      <View>
        <TextInput
          style={styles.inputText}
          onChangeText={onChange}
          value={textChanged}
        />
        <Button
          title="Change Text"
          onPress={onAddItem}
        />
      </View>
      <ScrollView>
        {listItems.map((item, index) => {
          return (
            <View key={index}>
              <Text>{item}</Text>
            </View>
          );
        })}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    margin: 30
  },
  inputText: {
    borderBottomColor: "black",
    borderBottomWidth: 1,
    marginBottom: 10,
    padding: 5
  }
});
