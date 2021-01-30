import { StyleSheet } from 'react-native';

const styleSheet = StyleSheet.create({
    container: {
        marginTop: 20,
    },
    sectionView: {
        alignItems: 'center',
        marginTop: 10,
        marginBottom: 50
    },
    productImg: {
        width: 200,
        height: 200,
    },
    name: {
        fontSize: 28,
        color: "#696969",
        fontWeight: 'bold'
    },
    price: {
        marginTop: 10,
        fontSize: 18,
        color: "green",
        fontWeight: 'bold'
    },
    textBold: {
        fontWeight:'bold'
    },
    normalText: {
        textAlign: 'center',
        fontSize: 14,
        color: "#696969",
    },
    qrcodeView: {
        marginTop: 20,
        height: 200,
        width: 200,
        alignSelf: 'center'
    }
});

export default styleSheet;