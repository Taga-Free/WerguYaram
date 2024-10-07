import { StyleSheet } from "react-native";

const style = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        margin: 15,
        paddingHorizontal: 15,
        paddingVertical: 15,
        backgroundColor: '#850606',
        elevation: 10,
        borderRadius: 5,

    },

    libelle: {
        paddingVertical: 10,
        fontWeight: 'bold',
        color: 'white',

    },

    ant: {
        color: '#850606',
        padding: 5,
        backgroundColor: 'white',
        borderRadius: 50 / 2,
    }
})

export default style