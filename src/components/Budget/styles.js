import { StyleSheet, Dimensions } from 'react-native'

const { width: screenWidth } = Dimensions.get('window')

export default StyleSheet.create({
    main: {
        borderWidth: 1,
        borderRadius: 4,
    },
    title: {
        backgroundColor: 'rgba(52, 52, 52, 0.05)',
        fontFamily: 'Roboto',
        fontWeight: 'bold',
        fontSize: 15,
        padding: 10,
        borderBottomWidth: 1,
        borderBottomColor: 'rgba(52, 52, 52, 0.3)',
        textAlign: 'center'
    },
    body: {
        padding: 20
    },
    field: {
        fontFamily: 'Roboto',
        fontWeight: 'bold',
        fontSize: 15,
    },
    modal: {
        backgroundColor: 'rgba(52, 52, 52, 0.8)',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
    },
    modalContent: {
        backgroundColor: '#ffff',
        padding: 20,
        borderRadius: 5,
        elevation: 5
    }
})