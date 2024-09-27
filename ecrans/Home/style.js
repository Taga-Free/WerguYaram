import { StyleSheet } from "react-native";
import { COLORS, PADDING } from "../../outils/constantes";


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
        color: '#000000',
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

    }

    ,

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

    title: {
        paddingHorizontal: PADDING.horizontal,
        paddingVertical: 1,
    },

    title_space_between: {
        paddingHorizontal: PADDING.horizontal,
        paddingVertical: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },

    titleBold: {
        fontWeight: 'bold',
    },

    link: {
        color: COLORS.main,
    },


    //Stzliser la Liste des Docteur

    DoctorContainer: {
        paddingHorizontal: PADDING.horizontal,
        paddingVertical: PADDING.vertical,

    },

    DoctorCard: {
        flex: 1,
        flexDirection: 'row',
        backgroundColor: 'white',
        elevation: 5,
        padding: 10,
        paddingHorizontal: PADDING.horizontal,
        paddingVertical: PADDING.vertical,
        marginBottom: 20,
        borderRadius: 5,
    },

    DoctorImg: {
        width: 80,
        height: 80,
        borderRadius: 80 / 2,
        marginRight: 15,
    },

    DoctorInfos: {
        flexDirection: 'column',

    },

    DoctorFullName: {
        fontWeight: 'bold',
        fontSize: 16,
        marginBottom: 5,

    },

    DoctorSpeciality: {
        backgroundColor: COLORS.main,
        padding: 5,
        paddingLeft: 12,
        borderRadius: 15,
        color: 'white',
    }




});

export default dashboardStyles;