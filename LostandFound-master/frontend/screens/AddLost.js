import React from 'react';
import {KeyboardAvoidingView, TouchableOpacity} from 'react-native';
import {StyleSheet,View} from "react-native";
import {Button,Input,Text} from "react-native-elements";
import {StatusBar} from "expo-status-bar";
import  { useLayoutEffect,useState } from 'react';
import axios from "axios"
import firebase from "firebase";



const AddFound = (props) => {


    const[name,setName]= useState("");
    const[description,setDescription]= useState("");
    const[brand,setBrand]= useState("");
    const[category,setCategory]= useState("");
    const[image,setImage]= useState("");


    const addItem = ()=> {

        console.log("Clicked")
        axios.post('http://10.0.2.2:8080/lost', {
            //user:user,
            name:name,
            description:description,
            brand:brand,
            category:category,
            image:image
        }).then(res => {
            console.log(res);
        }).catch=e=>{
            console.log(e)
        }
    }
    return (
        <KeyboardAvoidingView behavior="padding" style={styles.container}>

            <Text h4 style={{marginBottom:50}}>
                Welcome to Add Lost Item To Lost Screen Database
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
                    placeholder="brand"
                    autofocus type='text'
                    value={brand}
                    onChangeText={(text) => setBrand(text)}
                />
                <Input
                    placeholder="category"
                    autofocus type='text'
                    value={category}
                    onChangeText={(text) => setCategory(text)}
                />
                <Input
                    placeholder="Profile picture url"
                    autofocus type='text'
                    value={image}
                    onChangeText={(text) => setImage(text)}
                    //onSubmitEditing={register}
                />
            </View>

            <TouchableOpacity onPress={()=> addItem()} style={{backgroundColor:'black',borderRadius:5,paddingHorizontal:20,paddingVertical:5}}>
                <Text style={{color:'white'}}>SUBMIT</Text>
            </TouchableOpacity>
            <View style={{height:100}}></View>

        </KeyboardAvoidingView>
    );
};

export default AddFound

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
