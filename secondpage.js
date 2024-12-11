import React from "react";
import { Text,StyleSheet,View,Button } from "react-native";
import { useState } from "react";
const Secondpage = () =>{
    const[count,setcount]=useState(0);
    const Increment = () =>{
        setcount(count + 1);
    };
    const Decrement = () =>{
        setcount(count - 1);
    };
    
    return(
        <View>
        <Text style={styles.Text}>{count}</Text>
        <View style={styles.main}>
        <Button onPress={Increment} style={styles.Increment }title="Increment" />
        <Button onPress={Decrement} style={styles.Decrement } title="Decrement" />
        </View>
        </View>
    );
};
const styles=StyleSheet.create({
    Text:{
        marginTop:100,
        marginLeft:150,
        fontSize:100
    },
});
export default Secondpage;