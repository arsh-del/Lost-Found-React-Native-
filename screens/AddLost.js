import React from 'react';
import { KeyboardAvoidingView } from 'react-native';
import {StyleSheet,View} from "react-native";
import {Button,Input,Text} from "react-native-elements";
import {StatusBar} from "expo-status-bar";
import  { useLayoutEffect,useState } from 'react';


const AddLost = () => {

    const[name,setName]= useState("");
    const[description,setDescription]= useState("");
    const[value,setValue]= useState("");
    const[location,setLocation]= useState("");
    const[imageUrl,setImageUrl]= useState("");

  return (
    <KeyboardAvoidingView behavior="padding" style={styles.container}>
           
    <Text h4 style={{marginBottom:50}}>
        Welcome to Add Lost Item Screen
    </Text>

    <View style={styles.inputContainer}>
     <Input 
        placeholder="Product Name"
        autofocus type='text'
        value={name}
        onChangeText={(text) => setName(text)}
     />
     <Input 
        placeholder="Description"
        autofocus type='text'
        value={description}
        onChangeText={(text) => setDescription(text)}
     />
     <Input 
        placeholder="Value"
        autofocus type='text'
        value={value}
        onChangeText={(text) => setValue(text)}
     />
     <Input 
        placeholder="Location"
        autofocus type='text'
        value={location}
        onChangeText={(text) => setLocation(text)}
     />
     <Input 
        placeholder="Profile picture url"
        autofocus type='text'
        value={imageUrl}
        onChangeText={(text) => setImageUrl(text)}
        //onSubmitEditing={register}
     />
      </View>

      <Button containerStyle={styles.button} raised onPress={console.log("waheguru")} title="Upload" />
   <View style={{height:100}}></View>
    
</KeyboardAvoidingView>
);
};

export default AddLost 

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