import React,{useState,useEffect} from 'react';
import {StyleSheet,Text,View,Button,Image} from 'react-native';
import * as ImagePicker from 'expo-image-picker';
//import Constrants from 'expo-constants';
import { StatusBar } from 'expo-status-bar';
import { Platform } from "react-native";

import firebase from "firebase";

export default function App() {
    const [image,setImage] = useState(null);

    useEffect(async () =>{
        if(Platform.OS !=='web'){
            const {status} = await ImagePicker.requestMediaLibraryPermissionsAsync();
            if(status !=='granted'){
                alert('Permission denied')
            }
        }
    },[])

    const PickImage=async() =>{
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes:  ImagePicker.MediaTypeOptions.All,
            allowsEditing:true,
            aspect:[4,3],
            quality:1
        })
        console.log(result)
        if(!result.cancelled)
            setImage(result.uri)

        const storageRef = firebase.storage().ref();

        const res = storageRef.child("images/"+result.uri);

            console.log( "Firebase: "+res)
    }

    return (
        <View style={styles.container}>
            <Button title="Choose Image" onPress={PickImage}/>
            {image && <Image source={{uri:image}} style={{width:200,height:200}}   />}
            <StatusBar style="auto" />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
