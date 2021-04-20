import React, { useEffect } from "react";
import { StatusBar } from "react-native";
import  { useState } from 'react';
import {StyleSheet,Text,View} from "react-native";
import {Button,Input,Image} from "react-native-elements";
import { KeyboardAvoidingView } from "react-native";
import { auth } from "../firebase";


const LoginScreen=({navigation})=>{

    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')
 
    //useEffect

    useEffect(()=> {
        
        const unsubscribe = auth.onAuthStateChanged((authUser)=>{
          if(authUser){
              navigation.navigate("About");
          }
         });
         return unsubscribe;
         
     },[]);

    const signIn = () =>{
        auth
        .signInWithEmailAndPassword(email,password)
        .catch(error => alert(error));
    };

    return(
        <KeyboardAvoidingView behaviour="padding" style={styles.container}>
            <StatusBar style="light"/>

            <Image style={{ width: 150,height: 150}}source={require('../test.jpg')}/>
     
            <View style={styles.inputContainer}>
              <Input placeholder="Email" autoFocus type="Email" value={email} onChangeText={(text) => setEmail(text)}/>
              <Input placeholder="Password" secureTextEntry type="password" value={password} onChangeText={(text) => setPassword(text)} onSubmitEditing={signIn}/>
            </View>

            <Button containerStyle={styles.button} onPress={signIn} title="Login"/>
           <Button onPress={()=> navigation.navigate('Register')} containerStyle={styles.button} type="outline" title="Register"/>
            <View style={{height:100}}/>
        </KeyboardAvoidingView>

        
    );
};

export default LoginScreen;

const styles=StyleSheet.create({
    inputContainer:{
        width:300
    },
    container:{
        flex:1,
        alignItems:"center",
        justifyContent:"center",
        padding:10, 
        backgroundColor:"white",             
    },
    button:{
        width:200,
        marginTop:10,
    }
});