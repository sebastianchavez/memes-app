import React from 'react'
import { Text, TouchableOpacity, StyleSheet} from 'react-native'

export default ({text, onPress}) => {
    return (
        <TouchableOpacity style={styles.container} onPress={onPress}>
            <Text style={styles.btnText}>{text}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        height: 50,
        borderRadius: 5,
        backgroundColor: '#0984E3',
        justifyContent: 'center',
        alignItems: 'center'
    },
    btnText: {
        fontSize: 20,
        color:'#DFE6E9'
    }
})