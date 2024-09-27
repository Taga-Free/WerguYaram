import { StyleSheet } from "react-native";
import { Item } from "react-native-paper/lib/typescript/components/Drawer/Drawer";
import { PADDING } from "../../outils/constantes";


const Styles = StyleSheet.create({
    item: {
        marginRight: 15,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: 'white',
        paddingHorizontal: 5,
        paddingVertical: 5,
        borderRadius: 5,
        borderWidth: 0.5, // Épaisseur de la bordure blanche
        borderColor: '#850606', // Couleur blanche de la bordure
    },

    itemImg: {
        width: 30,
        height: 30,
        borderRadius: 30 / 2,
        paddingRight: 15,
    },
    Libelle: {
        marginLeft: 10,
    }


});

export default Styles;