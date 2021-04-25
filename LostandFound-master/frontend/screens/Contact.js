import React, {useState} from "react";
import {View, StyleSheet, Text, Button, Alert, TextInput} from "react-native";
import axios from "axios";
const Contact = () => {
  const[name,setName]= useState("");
  const[description,setDescription]= useState("");
  const[email,setEmail]= useState("");
  const [phoneNo, setPhoneNo]= useState("");
  const submitForm=()=>{
    axios.post('http://10.0.2.2:8080/contact', {
      name:name,
      description:description,
      email:email,
      phoneNo:phoneNo

    }).then(res => {
      console.log(res);
    }).catch=e=>{
      console.log(e)
    }
  }
  return (
      <View>
        <Text style={{}}> Contact us  Form </Text>
        <View>
          <TextInput placeholder="Name"  value={name}
                     onChangeText={(text) => setName(text)}/>
          <TextInput
              // secureTextEntry={true}
              placeholder="Email ID"
              value={email}
              onChangeText={(text) => setEmail(text)}
          />
          <TextInput  placeholder="Phone No"
                      value={phoneNo}
                      onChangeText={(text) => setPhoneNo(text)} />
          <TextInput placeholder="description"
                     numberOfLines={3}
                     multiline={true}
                     value={description}
                     onChangeText={(text) => setDescription(text)}

          />




          <Text>
            CLICK SUBMIT TO SUBMIT YOUR FORM
          </Text>



          <Button
              title="SUBMIT"
              onPress={() => submitForm()}
          />

          <Text>
            ADDRESS :- 265 Yorklan Blvd,North York, TORONTO
            PHONE NUMBER :- 416-485-2098
            EMAILID:- ajit.pal@3am.com

          </Text>



        </View>
      </View>
  )
};
const styles = StyleSheet.create({
  center: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
  },
});
export default Contact;
