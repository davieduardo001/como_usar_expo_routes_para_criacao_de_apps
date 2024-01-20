import { StyleSheet, Text, View } from "react-native";
import { Link } from 'expo-router'
import { StatusBar } from "react-native";
import { Button } from "../components/Button";

export default index = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>LOGIN PAAAAGEEE</Text>

        <Link style={styles.buttonContainer} href='test_tabs'>
          LOGIN ON THE APP
        </Link>

        <Button link_name='test_tabs' title='TITLE'/>
      
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
