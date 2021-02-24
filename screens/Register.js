import React from 'react'
import { Text, StyleSheet, ImageBackground, View } from 'react-native'
import { Ionicons } from '@expo/vector-icons'

/******* Components *******/
import Button from '../components/Button'
import Input from '../components/Input'

/******* Assets *******/
import bgAuth from '../assets/images/bg-auth.jpg'


export default ({navigation}) => {
    return (
        <ImageBackground style={{flex: 1}} source={bgAuth}>
            <Ionicons name="arrow-back" style={{paddingLeft: 10, paddingTop: 20}} size={35} color="#FFF" onPress={() => navigation.navigate('Login')} />
            <View style={styles.container}>
                <Text style={styles.title}>Registro</Text>
                <Text style={styles.text}>Email</Text>
                <Input />
                <Text style={styles.text}>Contraseña</Text>
                <Input secureTextEntry={true} />
                <Text style={styles.text}>Repetir Contraseña</Text>
                <Input secureTextEntry={true} />
                <View style={{height: 80}} />
                <Button text="Registrarse" />
            </View>
        </ImageBackground>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        paddingHorizontal: 30
    },
    title: {
        fontSize: 30,
        color: '#DFE6E9',
        textAlign: 'center'
    },
    text: {
        fontSize: 20,
        color: '#DFE6E9',
        marginTop: 30,
        marginBottom: 10
    },
    
})