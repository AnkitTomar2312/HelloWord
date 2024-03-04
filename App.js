import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import MapFunction from "./components/MapFunction";
import DynamicGrid from "./components/DynamicGrid";

export default function App() {
  return (
    <View style={styles.container}>
      {/* <MapFunction /> */}
      {/* <DynamicGrid /> */}
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 50,
    paddingLeft: 24,
    paddingRight: 24,
  },
});
