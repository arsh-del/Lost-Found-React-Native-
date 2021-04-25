import React, {useEffect} from "react";
import { View, Image, FlatList, SafeAreaView, Text,  TouchableOpacity, TextInput ,StyleSheet} from "react-native";
import  { useState } from 'react';
import axios from 'axios'
import {SearchBar} from "react-native-elements";
import {Ionicons} from "@expo/vector-icons";
import { useIsFocused } from '@react-navigation/native';
import firebase from "firebase";

const Lost = ({navigation}) => {

    const [found, setFound] = useState("");
    const [search, setSearch] = useState('');
    const [filteredDataSource, setFilteredDataSource] = useState([]);
    const [masterDataSource, setMasterDataSource] = useState([]);
    const isFocused = useIsFocused();
    useEffect(() => {
        const fetchData = async () => {

            //localhost for web
            //10.0.2.2 for android
             await axios.get(
                'http://10.0.2.2:8080/foundItems'
            ).then((responseJson) => {
                setFilteredDataSource(responseJson.data);
                setMasterDataSource(responseJson.data);
                setFound(responseJson.data);
            })





        }

        fetchData();


    }, [isFocused])


    // const dummyArray = [
    //     { id: '1', value: ' Iphone 12',description: 'Iphone 12 Black with leather case with flowers as a wallpaper', photo: require("../LostImages/Lfios.jpg") },
    //     { id: '2', value: 'IPod',description:'Ipod gen 2 white with headphones', photo: require("../LostImages/lfipod.jpg") },
    //     { id: '3', value: 'Gents Purse',description:'Brown Tommy marking purse with some cash', photo: require("../LostImages/lfpurse.jpg") },
    //     { id: '4', value: 'Gents Watch',description:'Fossil watch Silver with chain', photo: require("../LostImages/lfwatch.jpg") },
    //     { id: '5', value: 'Car Keys',description:'', photo: require("../LostImages/lost-keys.jpg") },
    //     { id: '6', value: 'wrangler shirt',description:'', photo: require("../test.jpg") },
    //     { id: '7', value: 'H & M shirt',description:'', photo: require("../test.jpg") },
    //   ];


    //const [listItems, setListItems] = useState("");


    const ItemView = ({item}) => {
        return (
            <View style={{flexDirection: 'column', marginLeft: 10}}>

                <View>
                    <TouchableOpacity onPress={() => navigation.navigate('Prodfound', {id: item._id})}>
                        <Image source={{uri: item.image}} style={{height: 150, width: 180}}/>
                    </TouchableOpacity>
                    <Text style={{fontSize: 20}}>{item.name}</Text>
                </View>
            </View>
        );
    };

    const ItemSeparatorView = () => {
        return (
            //Item Separator
            <View
                style={{height: 1, width: '100%', backgroundColor: 'white'}}
            />
        );
    };

    const searchFilterFunction1 = (text) => {
        // Check if searched text is not blank
        if (text) {
            console.log("Typing search")
            // Inserted text is not blank
            // Filter the masterDataSource
            // Update FilteredDataSource
            const newData = masterDataSource.filter(function (item) {
                const itemData = item.name
                    ? item.name.toUpperCase()
                    : ''.toUpperCase();
                const textData = text.toUpperCase();
                return itemData.indexOf(textData) > -1;
            });
            setFilteredDataSource(newData);
            setSearch(text);
        } else {
            // Inserted text is blank
            // Update FilteredDataSource with masterDataSource
            setFilteredDataSource(masterDataSource);
            setSearch(text);
        }
    };

        const ItemView1 = ({item}) => {
            return (
                // Flat List Item
                <View>
                    <TouchableOpacity onPress={() => navigation.navigate('Prodfound', {id: item._id})}>
                        <Image source={{uri: item.image}} style={{height: 150, width: 180}}/>
                    </TouchableOpacity>
                    <Text style={styles.itemStyle} onPress={() => getItem(item)}>
                        {item.name}
                    </Text>
                </View>

            );
        };

        const ItemSeparatorView1 = () => {
            return (
                // Flat List Item Separator
                <View
                    style={{
                        height: 0.5,
                        width: '100%',
                        backgroundColor: '#C8C8C8',
                    }}
                />
            );
        };

        const getItem = (item) => {
            // Function for click on an item
            //alert('Id : ' + item.id + ' Title : ' + item.title);
            navigation.navigate("Prodesc",item);
        };
        //
        // const getItem = () => {
        //   //Function for click on an item
        //   alert('Id : ' + found.id + ' Value : ' + found.name);
        //   console.log("working perfectly");
        //   navigation.navigate("Prodesc",found);
        // };

        const signOutUser = async () => {
            try {
                await firebase.auth().signOut();
                navigation.navigate('Home');
            } catch (e) {
                console.log(e);
            }
        }
        return (

            <SafeAreaView style={{flex: 1,backgroundColor:"lightgrey",flexDirection:"column"}}>
                <View style={{textAlign: "center",backgroundColor:"aqua",alignItems: "center",justifyContent: "space-around"}}>
                    <View style={{flexDirection: "row",justifyContent: "space-around"}}>
                        <Text style={{fontSize: 50, fontFamily: 'sans-serif-condensed',color:"white"
                            }}>Found</Text>
                            <View>
                                <TouchableOpacity onPress={() => signOutUser()} >
                                    <Ionicons name="log-out-outline" size={32} color="white"/>
                                </TouchableOpacity></View>
                            </View>



                </View>


                <View style={{marginVertical: 5, marginHorizontal: 10,backgroundColor:"lightgrey"}}>


                    <View style={styles.container}>
                        <SearchBar
                            round
                            searchIcon={{size: 24}}
                            onChangeText={(text) => searchFilterFunction1(text)}
                            onClear={(text) => searchFilterFunction1('')}
                            placeholder="Type Here..."
                            value={search}
                        />

                    <FlatList
                        data={filteredDataSource}
                        //data defined in constructor
                        ItemSeparatorComponent={ItemSeparatorView}
                        //Item Separator View
                        renderItem={ItemView1}
                        numColumns={2}
                        keyExtractor={(item, index) => index.toString()}
                    />
                    </View>
                </View>


            </SafeAreaView>

        );
    };

    const styles = StyleSheet.create({
        container: {
            backgroundColor: 'lightgrey',
        },
        itemStyle: {
            padding: 10,
        },
    });
export default Lost;
