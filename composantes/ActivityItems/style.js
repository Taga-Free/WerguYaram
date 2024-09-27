import { StyleSheet } from "react-native";


const Styles = StyleSheet.create({

    scrollableListItem: {
        paddingHorizontal: 15,
        paddingVertical: 15,
        marginRight: 15,
        backgroundColor: 'white',
        elevation: 2,
        backgroundColor: '#850606',
        borderRadius: 12,

    },

    SVG_View: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    SVG: {
        justifyContent: 'space-between',
        alignItems: 'center',
        width: 40,
        height: 40,
        borderRadius: 40 / 2,
    },
    SVG_img: {
        borderWidth: 2, // Épaisseur de la bordure blanche
        borderColor: '#ffffff', // Couleur blanche de la bordure
        borderRadius: 50 / 2, // Pour arrondir les coins

    },

    mainText: {
        marginLeft: 12,
        fontSize: 16,
        color: '#ffffff',
        fontWeight: 'bold',
    },

    subText: {
        marginTop: 5,
        color: '#ffffff',
        opacity: 0.5,
    },

});

export default Styles;