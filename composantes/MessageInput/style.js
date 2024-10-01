import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        padding: 5,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },

    input: {
        flex: 1,
        backgroundColor: 'white',
        marginLeft: 5,

    },

    send: {
        backgroundColor: '#850606',
        color: 'white',
        padding: 15,
        borderRadius: 50,

    }
})

export default styles;