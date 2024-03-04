import React from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";

const MapFunction = () => {
  const users = [
    {
      id: 1,
      name: "User 1",
    },
    {
      id: 2,
      name: "User 2",
    },
    {
      id: 3,
      name: "User 3",
    },
    {
      id: 4,
      name: "User 4",
    },
    {
      id: 5,
      name: "User 5",
    },
    {
      id: 6,
      name: "User 6",
    },
    {
      id: 7,
      name: "User 7",
    },
    {
      id: 8,
      name: "User 8",
    },
    {
      id: 9,
      name: "User 9",
    },
    {
      id: 10,
      name: "User 10",
    },
    {
      id: 11,
      name: "User 11",
    },
    {
      id: 12,
      name: "User 12",
    },
    {
      id: 13,
      name: "User 13",
    },
    {
      id: 14,
      name: "User 14",
    },
    {
      id: 15,
      name: "User 15",
    },
    {
      id: 16,
      name: "User 16",
    },
    {
      id: 17,
      name: "User 17",
    },
    {
      id: 18,
      name: "User 18",
    },
    {
      id: 19,
      name: "User 19",
    },
    {
      id: 20,
      name: "User 20",
    },
  ];
  return (
    <View>
      <Text style={styles.heading}>MapFunction</Text>
      <ScrollView>
        {users.map((item) => {
          return (
            <Text style={styles.listItem} key={item.id}>
              {item.name}
            </Text>
          );
        })}
      </ScrollView>
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
    marginTop: 10,
    padding: 15,
    borderRadius: 10,
  },
});
export default MapFunction;
