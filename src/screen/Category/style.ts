import { StyleSheet, Platform } from 'react-native';
import { Colors } from '@common';

const styleSheet = StyleSheet.create({
    container: {
        marginLeft: 20,
        marginRight: 20
    },
    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 20,
        margin: 5,
        backgroundColor: Colors.White,
        paddingLeft: 15,
        paddingRight: 15
    },
    textInputStyle: {
        height: 45,
        flex: 1,
    },
    lineStyle: {
        borderRightWidth: 1,
        borderRightColor: Colors.Primary,
        marginRight: 10,
        height: '100%'
    },
    closeContainer: {
        paddingLeft: 10,
        paddingRight: 10
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
        paddingLeft: 20,
        marginTop: 10,
        marginBottom: 10,
        backgroundColor: "white",
        padding: 10,
        flexDirection: 'row',
        borderRadius: 30,
        alignItems: 'center'
    },
    name: {
        flex: 1,
        fontSize: 18,
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