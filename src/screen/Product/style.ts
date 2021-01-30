import { StyleSheet } from 'react-native';
import { Colors } from '@common';

const styleSheet = StyleSheet.create({
    container: {
        marginLeft: 20,
        marginRight: 20
    },
    scanText: {
        fontSize: 16,
        flex:1,
        textAlign: 'center'
    },
    cardContent: {
        marginLeft: 20,
        flex: 1
    },
    image: {
        width: 90,
        height: 90,
        borderRadius: 45,
        borderWidth: 2,
        borderColor: "#ebf0f7"
    },
    card: {
        shadowColor: '#00000021',
        shadowOffset: {
            width: 0,
            height: 6,
        },
        shadowOpacity: 0.37,
        shadowRadius: 7.49,
        elevation: 2,
        marginBottom: 20,
        backgroundColor: "white",
        padding: 10,
        flexDirection: 'row',
        borderRadius: 30,
        alignItems:'center'
    },
    name: {
        fontSize: 18,
    },
    normalText: {
        fontSize: 14,
    },
    emptyView: {
        flex: 1,
        justifyContent: 'center'
    },
    emptyText: {
        textAlign: 'center',
        fontSize: 20
    },
    textInputStyle: {
        height: 45,
        width: 300,
        borderBottomColor: Colors.Primary,
        borderBottomWidth: 1
    },
    modelContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0,0,0,0.3)'
    },
    modalInsideView: {
        backgroundColor: Colors.White,
        padding: 20
    },
    modelHeaderView: {
        flexDirection: 'row',
        alignItems: 'center',
        height: 30 
    },
    modelTitle: {
        textAlign: "center",
        flex:1 
    },
});

export default styleSheet;