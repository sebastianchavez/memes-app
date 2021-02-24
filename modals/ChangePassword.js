import React from 'react'
import { Text, StyleSheet, ImageBackground, View } from 'react-native'
import bgImage from '../assets/images/bg-app.jpg'
import { Button, Input } from '../components'
import { Ionicons } from '@expo/vector-icons'

export default ({ navigation }) => {
    return (
    <ImageBackground source={bgImage} style={styles.container}>
            <Ionicons name="arrow-back" size={35} color="#FFF" onPress={() => navigation.navigate('MyProfile')} />
            <Text style={styles.text}>Nueva contraseña</Text>
            <Input />
            <Text style={styles.text}>Confirmar contraseña</Text>
            <Input />
            <View style={{height: 30}} />
            <Button text="Cambiar contraseña" />
    </ImageBackground>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 20,
        paddingTop: 35,
    },
    text: {
        color: '#FFF',
        fontSize: 20,
        marginTop: 20,
        marginBottom: 10
    }
})