import React, {useState} from "react";
import {View, StyleSheet, Text, TextInput, Button, Alert} from "react-native";
import {Slider} from "react-native-elements/dist/slider/Slider";
import axios from "axios";

const FeedBack = () => {

  const[name,setName]= useState("");
  const[description,setDescription]= useState("");
  const[email,setEmail]= useState("");

  const [value, setValue] = useState(0);

  const submitForm=()=>{
    axios.post('http://10.0.2.2:8080/feedback', {
      name:name,
      description:description,
     email:email,
      value:value

    }).then(res => {
      console.log(res);
    }).catch=e=>{
      console.log(e)
    }
  }
  return (
    <View style={styles.center}>
      <Text>3AM Lost and Found</Text>
      <View>
        <TextInput placeholder="Name"  value={name}
                   onChangeText={(text) => setName(text)}/>
        <TextInput
            // secureTextEntry={true}
            placeholder="Email ID"
            value={email}
            onChangeText={(text) => setEmail(text)}
        />
        <TextInput placeholder="description"
                   numberOfLines={3}
                   multiline={true}
                   value={description}
                   onChangeText={(text) => setDescription(text)}

        />
        <Text>
          Rate the services you got from us
        </Text>
        <Slider
            step={1}
            minimumValue={0}
            maximumValue={5}
            value={value}
            onValueChange={slideValue => setValue(slideValue)}
            minimumTrackTintColor="#1fb28a"
            maximumTrackTintColor="#d3d3d3"
            thumbTintColor="#b9e4c9"
        />
        <Text>
          Slide value: {value}
        </Text>

        <Button
            title="SUBMIT"
            onPress={() => submitForm()}
        />
    </View>
    </View>
  );
};
const styles = StyleSheet.create({
  center: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
  },
});
export default FeedBack;
