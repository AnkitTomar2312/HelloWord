import React from "react";
import { StyleSheet, Text, View } from "react-native";
const SectionList = () => {
  return (
    <View>
      <Text style={styles.heading}>Section List</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  heading: {
    fontSize: 48,
    color: "red",
    textAlign: "center",
  },
  listItem: {
    backgroundColor: "blue",
    fontSize: 18,
    color: "white",
    margin: 10,
    padding: 15,
    borderRadius: 10,
    width: 100,
    height: 100,
    textAlign: "center",
    textAlignVertical: "center",
  },
  box: {
    flexDirection: "row",
    justifyContent: "space-around",
    borderColor: "red",
    borderWidth: 1,
    borderStyle: "dashed",
  },
});
export default SectionList;
