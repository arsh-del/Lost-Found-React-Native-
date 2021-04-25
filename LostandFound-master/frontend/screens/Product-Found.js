import React, {useEffect, useState} from "react";
import {View, StyleSheet, Text, TouchableOpacity, Button, Image, KeyboardAvoidingView, TextInput} from "react-native";
import products from "../data/data";
import data from "../data/data";
import {Input} from "react-native-elements";
import axios from "axios";


const Productdescript = ({route,navigation}) => {

    const[name,setName]= useState("");
    const[description,setDescription]= useState("");
    const[brand,setBrand]= useState("");
    const[category,setCategory]= useState("");

    const[found,setFound]= useState("");

    useEffect(()=>{
        const fetchData =async ()=>{

            //localhost for web
            //10.0.2.2 for android
            const response = await axios.get(
                'http://10.0.2.2:8080/foundItems/'+route.params.id
            );

            setFound(response.data);
            setName(response.data.name)
            setDescription(response.data.description)
            setCategory(response.data.category)
            setBrand(response.data.brand)
            console.log(response.data)

        }
        console.log("testing Productdescript")
        fetchData();


    },[route])
    console.log("found this" + found);



console.log(route.params.id)
    const deleteItem = ()=> {
        console.log("Clicked")
        axios.delete('http://10.0.2.2:8080/foundItems/'+route.params.id).then(res => {
            console.log(res);
        }).catch=e=>{
            console.log(e)
        }
    }
    const updateItem = ()=> {
        axios.put('http://10.0.2.2:8080/foundItems/'+route.params.id, {
            name:name,
            description:description,
            brand:brand,
            category:category,

        }).then(res => {
            console.log(res);
        }).catch=e=>{
            console.log(e)
        }
    }
    return (
        <View style={styles.center}>


                        <View>
                            <Image source={{uri: found.image}} style={{height:350, width:350}}/>
                            {console.log(name)}
                            <TextInput style={{fontSize:28}} value={name}
                                       onChangeText={(text) => setName(text)} />
                            <TextInput placeholder={found.description} style={{fontSize:22}} value={description} multiline={true}
                                       onChangeText={(text) => setDescription(text)} />
                            <TextInput placeholder={found.brand} value={brand}
                                       onChangeText={(text) => setBrand(text)} />
                            <TextInput placeholder={found.category} value={category}
                                       onChangeText={(text) => setCategory(text)} />

                        </View>

            <TouchableOpacity onPress={()=> deleteItem()} style={{backgroundColor:'red',borderRadius:5,paddingHorizontal:20,paddingVertical:5}}>
                <Text style={{color:'black'}}>Delete</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=> updateItem()} style={{backgroundColor:'black',borderRadius:5,paddingHorizontal:20,paddingVertical:5}}>
                <Text style={{color:'white'}}>Update</Text>
            </TouchableOpacity>

        </View>
    );[]
};
const styles = StyleSheet.create({
    center: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
    },
});
export default Productdescript;
