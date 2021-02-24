import React from 'react'
import { Text, StyleSheet, ImageBackground, View, TouchableOpacity } from 'react-native'

/******* Components *******/
import { Button, FacebookButton, Input, Link } from '../components'

/******* Assets *******/
import bgAuth from '../assets/images/bg-auth.jpg'


export default ({navigation}) => {
    return (
        <ImageBackground style={styles.container} source={bgAuth}>
            <Text style={styles.title}>Mommos App</Text>
            <Text style={styles.text}>Email</Text>
            <Input />
            <Text style={styles.text}>Contraseña</Text>
            <Input secureTextEntry={true} />
            <View style={{height: 40}} />
            <Button text="Ingresar" onPress={() => navigation.navigate('Home')}/>
            <View style={{height: 40}} />
            <FacebookButton onPress={() => navigation.navigate('Home')}/>
            <View style={{height: 20}} />
            <Link text="Registrarse" onPress={() => navigation.navigate('Register')} />
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
        textAlign: 'center',
        fontStyle: 'italic'
    },
    text: {
        fontSize: 20,
        color: '#DFE6E9',
        marginTop: 30,
        marginBottom: 10
    }
})