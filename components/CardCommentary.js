import React from 'react'
import { View, StyleSheet, Text} from 'react-native'

export default () => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Comentario</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: undefined,
        height: 100,
        borderRadius: 100,
        backgroundColor: '#FFF'
    },
    text: {
        color: '#2d3436'
    }
})