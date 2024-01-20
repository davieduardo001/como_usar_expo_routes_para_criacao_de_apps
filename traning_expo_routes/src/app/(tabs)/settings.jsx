import { StyleSheet, Text, View, Button } from "react-native";
import { Link } from "expo-router";
import { StatusBar } from "react-native";

export default Page = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Settings screen</Text>

        <Link style={styles.buttonContainer} href=''>
            Go to LOGIN PAGE
        </Link>
        <StatusBar />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 64,
    fontWeight: "bold",
  },
  buttonContainer: {
    backgroundColor: "#BEFFF7",
    padding: 20,
    width: 300,
  }
});
