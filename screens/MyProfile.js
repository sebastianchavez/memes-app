import React from 'react'
import { View, Text, StyleSheet, ImageBackground, SafeAreaView, TouchableOpacity, Image } from 'react-native'
import { Input, Button } from '../components'
import bgImage from '../assets/images/bg-app.jpg'
import { FontAwesome5 } from '@expo/vector-icons'

import profileImage from '../assets/images/no-profile.jpg'


export default ({navigation}) => {
    return (
        <ImageBackground source={bgImage} style={styles.container}>
            <SafeAreaView style={{flex: 1, width: '100%', marginTop: 30}}>
                <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                    <Text style={{ margin: 16, fontSize: 20, color: '#DFE6E9'}}>Mi perfil</Text>
                    <TouchableOpacity style={{ margin: 16 }} onPress={navigation.openDrawer}>
                        <FontAwesome5 name="bars" size={24} color="white" />
                    </TouchableOpacity>
                </View>

            <View style={styles.container}>
                <View style={{justifyContent: 'center', alignItems: 'center'}}>
                    <Image source={profileImage} style={styles.profileImage} />
                </View>
                <Text style={styles.name}>Nombre</Text>
                <Input />
                <View style={{height: 30}} />
                <Button  text='Cambiar contraseña' onPress={() => navigation.navigate('ChangePassword')} />
            </View>
            </SafeAreaView>
        </ImageBackground>
    )
}

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 10,
        flex: 1,
    },
    profileImage: {
        marginTop: 20,
        borderRadius: 100,
        borderColor: '#FFF',
        borderWidth: 5,
        width: 200,
        height: 200
    },
    name: {
        marginTop: 20,
        marginBottom: 10,
        fontSize: 20,
        color: '#FFF'
    }
})