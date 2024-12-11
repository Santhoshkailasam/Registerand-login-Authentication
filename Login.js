import React from "react";
import { Text,View,StyleSheet,TextInput,Button } from "react-native";
import { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import auth from "./service/firebaseAuth";
import { useNavigation } from '@react-navigation/native';
const Login =() =>{
    const[Email,setEmail]=useState("")
    const[Password,setPassword]=useState("");
    const[Error,seterror]=useState("");
    const navigation = useNavigation(); 
    const Handler =()=>{
        seterror("");
        signInWithEmailAndPassword(auth,Email,Password)
        .then((userCredential) => {
            const user=userCredential.user;
            navigation.navigate("Screenpage")
        })
        .catch((error) =>{
             console.log(error)
             seterror(error.message)
        })
    }
    const Registerpage= () =>{
        navigation.navigate('Register')

    }
    return(
        <View style = {styles.main}>
        <Text>Email</Text>
        <TextInput onChangeText={setEmail} style = {styles.textinput} placeholder="Enter a  email" />
        <Text>Password</Text>
        <TextInput onChangeText={setPassword} style = {styles.textinput} placeholder="Enter a password" secureTextEntry/>
        <View style={styles.btn}>
        <Button title="login" onPress={Handler} /> 
       {Error && <Text style={{color:"red"}}>{Error}</Text> }   
        </View>
        <Text onPress={Registerpage}>Create an account click here</Text>
         </View>
    );
};
const styles=StyleSheet.create ({
    main:{
        marginTop:250,
        marginLeft:50,
        borderWidth:1,
        width:260,
        paddingLeft:20,
        paddingTop:10,
        backgroundColor:"#b6e4fc",
        
    },
    textinput:{
        width:200,
        height:35,
        borderWidth:1,
        marginTop:10,
        paddingLeft:40,
        marginBottom:10,
        
    },
    btn:{
        marginTop:6,
        width:100,
        marginLeft:50 ,
        marginBottom:10 
    }
});
export default Login;