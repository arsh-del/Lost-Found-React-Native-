import React from 'react';
import { KeyboardAvoidingView } from 'react-native';
import {StyleSheet,View} from "react-native";
import {Button,Input,Text} from "react-native-elements";
import {StatusBar} from "expo-status-bar";
import  { useLayoutEffect,useState } from 'react';
import {auth} from "../firebase"; 

const RegisterScreen =({navigation}) => {
  
    const[name,setName]= useState("");
    const[email,setEmail]= useState("");
    const[password,setPassword]= useState("");
    const[imageUrl,setImageUrl]= useState("");

    useLayoutEffect(() => {
       navigation.setOptions({
        headerBackTitle:"Back to Login",
           title:"Back to Login",
           
       });
    },[navigation]);

    const register = () =>{
           auth.createUserWithEmailAndPassword(email,password)
           .then(authUser =>{
           authUser.user.updateProfile({
               displayName: name,
               photoURL: imageUrl ||
               "https://www.imagediamond.com/blog/wp-content/uploads/2020/05/be-happy-images-9.jpg"
           }); 
           }).catch(error => alert(error.message));
    }; 


    return (
        <KeyboardAvoidingView behavior="padding" style={styles.container}>
           
            <Text h3 style={{marginBottom:50}}>
                Welcome to Register Screen
            </Text>

            <View style={styles.inputContainer}>
             <Input 
                placeholder="Full Name"
                autofocus type='text'
                value={name}
                onChangeText={(text) => setName(text)}
             />
             <Input 
                placeholder="Email"
                autofocus type='text'
                value={email}
                onChangeText={(text) => setEmail(text)}
             />
             <Input 
                placeholder="password"
                autofocus type='text'
                value={password}
                onChangeText={(text) => setPassword(text)}
             />
             <Input 
                placeholder="Profile picture url"
                autofocus type='text'
                value={imageUrl}
                onChangeText={(text) => setImageUrl(text)}
                onSubmitEditing={register}
             />
              </View>

              <Button containerStyle={styles.button} raised onPress={register} title="Register" />
           <View style={{height:100}}></View>
            
        </KeyboardAvoidingView>
    );
};

export default RegisterScreen 

const styles = StyleSheet.create({
    container:{
         flex:1,
         alignItems:"center",
         justifyContent:"center",
         padding:10,
         backgroundColor:"white",
    },
    inputContainer:{
      width:300,

    },
    button:{
     width:200,
     marginTop:10,
    },
})