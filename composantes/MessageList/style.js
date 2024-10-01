import { StyleSheet } from "react-native";
import { COLORS, PADDING } from "../../outils/constantes";

const styles = StyleSheet.create({

    messagesContainer: {
        flexDirection: 'row', // Aligne les deux conteneurs (gauche et droite) horizontalement
        backgroundColor: '#8B0000',
        padding: 10,
        borderRadius: 10,
        marginVertical: 5,
        alignItems: 'center', // Aligne verticalement au centre
        justifyContent: 'space-between', // Sépare les deux conteneurs
    },


    topContainer: {
        flexDirection: 'row', // Aligne l'image et le texte horizontalement
        alignItems: 'center', // Centre verticalement l'image et le texte
        flex: 1, // Prend tout l'espace disponible
    },

    imageContainer: {
        borderWidth: 5, // Épaisseur de la bordure blanche
        borderColor: '#ffffff', // Couleur blanche de la bordure
        borderRadius: 50, // Pour arrondir les coins
    },


    messageImg: {
        width: 50,
        height: 50,
        borderRadius: 50 / 2,
    },
    messagesInfo: {
        flexDirection: 'column',
        marginLeft: 10,
    },

    fullname: {
        fontWeight: 'bold',
        fontSize: 16,
        color: 'white',
    },


    last_message: {
        color: 'white',
        opacity: 0.5,
    },

    time: {
        color: 'white',
    },

    rightContainer: {
        flexDirection: 'row',
        flex: 1,
        justifyContent: 'flex-end',
    }

})

export default styles;