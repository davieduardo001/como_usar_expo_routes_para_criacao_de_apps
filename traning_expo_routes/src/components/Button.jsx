import { Link } from "expo-router"
import { StyleSheet, TouchableOpacity, Text } from "react-native"

export const Button = ({link_name, title}) => {
    return (
        <Link href={link_name} asChild>
            <TouchableOpacity style={styles.container}>
                <Text>{title}</Text>
            </TouchableOpacity>
        </Link>
    )
}

const styles = StyleSheet.create({
    container: {
        width: 300,
        backgroundColor: '#97FEED',
        padding: 40,
    },
})