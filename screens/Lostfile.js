import React from "react";
import { Button, View,Image,FlatList,SafeAreaView,Text,Input } from "react-native";
import  { useState } from 'react';

const Lost = ({navigation}) => {

    const[search,setSearch]= useState("");

    const dummyArray = [
        { id: '1', value: ' Adidas Shirt', photo: require("../test.jpg") },
        { id: '2', value: 'Polo shirt', photo: require("../test.jpg") },
        { id: '3', value: 'Tommy shirt', photo: require("../test.jpg") },
        { id: '4', value: 'Guchi shirt', photo: require("../test.jpg") },
        { id: '5', value: 'Nike shirt', photo: require("../test.jpg")},
        { id: '6', value: 'wrangler shirt', photo: require("../test.jpg") },
        { id: '7', value: 'H & M shirt', photo: require("../test.jpg") },
      ];
      
    
        const [listItems, setListItems] = useState(dummyArray);
      
        
        const ItemView = ({ item }) => {
          return (
    
            
            // Single Comes here which will be repeatative for the FlatListItems
           <View>
               
             <View style={{flexDirection:'column',marginLeft:10}}>
            
              <Image source={item.photo} style={{height:150, width:180}}/>
              <View style={{alignItems: 'center', justifyContent: 'center'}}>
              <Text onPress={() => getItem(item)}>
                {item.value}
              </Text>
              </View>
               </View>
            </View> 
          );
        };
      
        const ItemSeparatorView = () => {
          return (
            //Item Separator
            <View
              style={{ height: 1, width: '100%', backgroundColor: 'Black' }}
            />
          );
        };
      
        const getItem = (item) => {
          //Function for click on an item
          alert('Id : ' + item.id + ' Value : ' + item.value);
          navigation.push("placeOrder");
        };
          

  return (
      
    <SafeAreaView style={{ flex: 1 }}>
        <View style={{marginTop:10,justifyContent:'center',alignItems:'center',marginBottom:5}}><Text>Searchbar</Text></View>
  <View style={{marginVertical:5,marginHorizontal:10}} >
  <View >
    </View>
    <FlatList
      data={listItems}
      //data defined in constructor
      ItemSeparatorComponent={ItemSeparatorView}
      //Item Separator View
      renderItem={ItemView}
      numColumns={2}
      keyExtractor={(item, index) => index.toString()}
    />
  </View>
  
</SafeAreaView>

  );
};

export default Lost;