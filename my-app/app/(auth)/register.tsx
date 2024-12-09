import { SafeAreaView, StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native'
import React from 'react'
import { router } from 'expo-router'

const register = () => {
  return (
    <SafeAreaView style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.textHeader}>DAFTAR</Text>
        </View>
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
            <View style={styles.input}>
            <TextInput 
                placeholder='Konfirmasi Password'
                style={styles.textInput}
                />
            </View>
            <View>
                <TouchableOpacity
                onPress={() => {
                  router.push('/(auth)/login')
                }}
                style={styles.buttom}>
                    <Text style={styles.buttomText}>Sign Up</Text>
                </TouchableOpacity>
            </View>
        </View>
    </SafeAreaView>
)
}

export default register

const styles = StyleSheet.create({
    container:{
        flex:1,
    },
    header:{
        flex:0.3,
    },
    textHeader:{
      fontSize:30,
      fontWeight:"bold",
      marginTop:200,
      textAlign:"center"
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
    }
})