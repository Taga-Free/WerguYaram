import { StyleSheet } from "react-native";
import { PADDING } from "../../outils/constantes";


const dashboardStyles = StyleSheet.create({
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: PADDING.horizontal,
        paddingVertical: 12,
        backgroundColor: '#ffffff',
    },
    imageContainer: {
        borderWidth: 2, // Épaisseur de la bordure blanche
        borderColor: '#850606', // Couleur blanche de la bordure
        borderRadius: 50, // Pour arrondir les coins
    },

    userImg: {
        width: 50,
        height: 50,
        borderRadius: 50 / 2,
    },

    userName: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#850606',
    },

    //Styliser le flatList

    scrollableList: {
        paddingHorizontal: PADDING.horizontal,
        paddingVertical: PADDING.vertical,
    },

    scrollableListItem: {
        paddingHorizontal: 15,
        paddingVertical: 15,
        marginRight: 15,
        backgroundColor: 'white',
        elevation: 2,
        backgroundColor: '#850606',
        borderRadius: 12,

    },

    mainText: {
        fontSize: 16,
        color: '#ffffff',
        fontWeight: 'bold',
    },

    subText: {
        color: '#ffffff',
        opacity: 0.5,
    },



});

export default dashboardStyles;