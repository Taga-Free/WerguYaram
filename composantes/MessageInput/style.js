import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 10,
    },
    input: {
        flex: 1,
        height: 40,
        borderColor: '#ccc',
        borderWidth: 1,
        borderRadius: 20,
        paddingHorizontal: 15,
        backgroundColor: '#fff',
    },
    send: {
        marginLeft: 10,
        backgroundColor: '#d32f2f',
        borderRadius: 30,
        padding: 10,
    },
    playButton: {
        backgroundColor: '#2196F3',
        borderRadius: 50,
        padding: 15,
        margin: 10,
    },
})

export default styles;