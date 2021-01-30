import { StyleSheet, Dimensions } from 'react-native';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        zIndex: 10,
        height: height,
        width: width,
        backgroundColor: 'rgba(0,0,0,0.3)',
        alignItems: 'center',
        justifyContent: 'center',
    },
    spinnerBox: {
        backgroundColor: '#fff',
        alignItems: 'center',
        padding: 30,
        borderRadius: 10
    },
    spinnerText: {
        marginTop: 10,
        fontSize: 15
    },
    moreLoading: {
        alignItems: 'center',
        justifyContent: 'center',
    },
});

export default styles;

