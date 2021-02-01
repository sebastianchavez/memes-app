import React from 'react'
import { Text, StyleSheet, ImageBackground, View } from 'react-native'

/******* Components *******/
import Button from '../components/Button'
import Input from '../components/Input'

/******* Assets *******/
import bgAuth from '../assets/images/bg-auth.jpg'


export default () => {
    return (
        <ImageBackground style={styles.container} source={bgAuth}>
            <Text style={styles.text}>Email</Text>
            <Input />
            <Text style={styles.text}>Contraseña</Text>
            <Input secureTextEntry={true} />
            <Text style={styles.text}>Repetir Contraseña</Text>
            <Input secureTextEntry={true} />
            <View style={{height: 80}} />
            <Button text="Registrarse" />
        </ImageBackground>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        paddingHorizontal: 30
    },
    text: {
        fontSize: 20,
        color: '#DFE6E9',
        marginTop: 30,
        marginBottom: 10
    },
    
})