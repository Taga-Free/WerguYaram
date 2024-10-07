import { StyleSheet } from "react-native";

const style = StyleSheet.create({

    container: {
        flex: 1,
        paddingHorizontal: 15,
        paddingVertical: 15,


    },


    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: 'white',
        elevation: 5,
        borderWidth: 2,
        borderColor: '#850606',
        borderRadius: 5,

    },

    head: {
        flexDirection: 'column'

    },

    userName: {
        marginLeft: 10,
        fontWeight: 'bold',
        fontSize: 16,
        color: 'black',

    },

    info: {
        marginLeft: 15,

    },

    img: {
        margin: 10,
        height: 70,
        width: 70,
        borderRadius: 70 / 2,
        borderWidth: 2,
        borderColor: '#850606',

    },

})

export default style;