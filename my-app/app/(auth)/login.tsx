import { SafeAreaView, StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native'
import React from 'react'
import { router } from 'expo-router'

const login = () => {
  return (
    <SafeAreaView style={styles.container}>
        <View style={styles.header}></View>
        <View style={styles.body}>
            <View style={styles.input}>
                <TextInput 
                placeholder='Username'
                style={styles.textInput}
                />
            </View>
            <View style={styles.input}>
            <TextInput 
                placeholder='Password'
                style={styles.textInput}
                />
            </View>
            <View>
                <TouchableOpacity
                onPress={() => {
                    router.push("/(tabs)/home")
                }}style={styles.buttom}>
                    <Text style={styles.buttomText}>Log In</Text>
                </TouchableOpacity>
            </View>
            <Text style={styles.textFooter}>Sudah punya akun ?</Text>
            <TouchableOpacity 
            onPress={() => {
                router.push("/(auth)/register")
            }}
            >
                <Text style={styles.textFooter}>DAFTAR</Text>
            </TouchableOpacity>
        </View>
    </SafeAreaView>
)
}

export default login

const styles = StyleSheet.create({
    container:{
        flex:1,
    },
    header:{
        flex:0.3,
    },
    body:{
        flex:0.4,
    },
    input:{
        height:60,
        width:400,
        marginHorizontal:"auto",
        borderRadius:10,
        borderWidth:1,
        marginTop:20
    },
    textInput:{
        height:"100%",
        width:"80%",
        marginHorizontal:"auto"
    },
    buttom:{
        height:70,
        width:200,
        backgroundColor:"green",
        justifyContent:'center',
        borderRadius:10,
        marginTop:80,
        marginHorizontal:"auto"
    },
    buttomText:{
        fontSize:20,
        textAlign:"center"
    },
    textFooter:{
        fontSize:20,
        marginTop:20,
        textAlign:"center"
    }
})