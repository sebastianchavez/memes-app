import React from 'react'
import { View, Text, StyleSheet, ScrollView, ImageBackground, Image, TouchableOpacity } from 'react-native'
import { DrawerNavigatorItems } from 'react-navigation-drawer'
import { Ionicons } from '@expo/vector-icons'

import bgApp from '../assets/images/bg-app.jpg'
import profileImage from '../assets/images/no-profile.jpg'


export default (props) => {
    return (
        <ScrollView>
            <ImageBackground source={bgApp} style={{width: undefined, padding: 16, paddingTop: 48}} >
                <Image source={profileImage} style={styles.profile} />
                <Text style={styles.name}>Nombre de usuario</Text>
    
                <View style={{flexDirection: 'row'}}>
                    <Text style={styles.followers}>69 Seguidores</Text>
                    <Ionicons name='md-people' size={16} color='rgba(255, 255, 255, 0.8)'/>
                </View>
            </ImageBackground>
    
            <View style={styles.container}>
                <DrawerNavigatorItems {...props} />
            </View>

            <TouchableOpacity style={{flex: 1, flexDirection: 'row', paddingHorizontal: 20, paddingVertical: 10}} onPress={() => props.navigation.navigate('Login')} >
                <Text style={{ fontSize: 16}}>Salir</Text>
            </TouchableOpacity>
        </ScrollView>
    )
} 

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    profile: {
        width: 80,
        height: 80,
        borderRadius: 40,
        borderWidth: 3,
        borderColor: '#FFF'
    },
    name: {
        color: '#FFF',
        fontSize: 20,
        fontWeight: '800',
        marginVertical: 8
    },
    followers: {
        color: 'rgba(255, 255, 255, 0.8)',
        fontSize: 13,
        marginRight: 4
    }
})