import React from "react";
import { Text, View,StyleSheet } from "react-native";
import Hamburger from "./assets/hamberger_icon.svg";
import Logo from "./assets/logo.svg";
import Overhead from "./assets/overhead_icon.svg"
import Flimrole from "./assets/icon/flimrole_icon.svg"
import Playnow from "./assets/icon/play_icon.svg"
import Explore from "./assets/icon/explore_icon.svg"
import Statice from "./assets/icon/statice_icon.svg"
import User from "./assets/icon/user_icon.svg"

const Screenpage = () => {
  return (
    <View>
    <View style={styles.main}>
      <Hamburger width={40} height={20} style={styles.ham} />
      <Logo width={50} height={100} style={styles.logo} />
    </View>
    <View>
      <Text style={styles.welcome}>Welcome back</Text>
      <Text style={styles.kailash}>Kailash</Text>
    </View>
    <View style={styles.nav}>
      <Text>Insomania</Text>
    </View>
     <Text style={styles.recommand}>Recommanded</Text>
     <View style={styles.relaxbox}>
      <Text style={styles.relaxtext}>Relaxing Meditation</Text>
      <Text style={styles.audio}>7 day Audio and video series</Text>
      <View style={styles.overandflim}>
      <Overhead />
      <Flimrole style={styles.flimrole}/>
      </View>
     </View>
     <Text style={styles.recommand}>Playlist</Text>
     <View style={styles.relaxsongbox}>
      <Text style={styles.relaxtext}>Relax Songs</Text>
      <Text style={styles.audio}>sometimes the most productive thing you can do relax</Text>
      <View style={styles.playbox}>
        <Text style={styles.play}>Play now </Text>
        <Playnow style={styles.playsvg} />
      </View>
     </View>
     <Text style={styles.recommand}>Recent</Text>
     <View style={styles.recent}>
      <Text style={styles.relaxtext}>Calming sounds</Text>
     </View>
     <View style={styles.footer}>
         <Explore />
         <Statice />
         <User />
     </View>
    </View>
  );
};
const styles = StyleSheet.create({
  ham:{
    marginTop:50,
    marginLeft:10,
},
logo:{
  marginLeft:105,
  marginTop:10,
},
main:{
  flexDirection:"row",

},
welcome:{
  fontWeight:"bold",
  marginLeft:10,
  fontSize:20,
},
kailash:{
  marginLeft:10,
  fontSize:20,
},
nav:{
  backgroundColor:"#a2faf6",
  width:100,
  height:40,
  paddingTop:7,
  paddingLeft:15,
  marginLeft:10,
  borderRadius:8,
  marginTop:10
},
recommand:{
  marginLeft:10,
  marginTop:10
},
relaxbox:{
  marginTop:7,
  backgroundColor:"#72d4ed",
  width:240,
  height:160,
  marginLeft:10,
  borderRadius:20
},
relaxtext:{
  color:"white",
  fontWeight:"bold",
  fontSize:20,
  marginLeft:25,
  marginTop:10
},
audio:{
  color:"white",
  fontSize:13,
  marginLeft:25,
  marginTop:5
},
overandflim:{
  flexDirection:"row",
  marginTop:44,
  marginLeft:25
},
flimrole:{
  marginLeft:20,
},
relaxsongbox:{
  marginTop:7,
  backgroundColor:"#3c8254",
  width:240,
  height:160,
  marginLeft:10,
  borderRadius:20
},
playbox:{
  backgroundColor:"white",
  flexDirection:"row",
  width:90,
  height:30,
  marginLeft:25,
  marginTop:20,
  borderRadius:5
},
play:{
  marginTop:5,
  marginLeft:4,
  fontWeight:"bold"
},
playsvg:{
  marginTop:9,
  marginLeft:3
},
recent:{
  marginTop:7,
  backgroundColor:"#c76161",
  width:130,
  height:120,
  marginLeft:10,
  borderRadius:20,
  overflow: "hidden", 
},
footer:{
  flexDirection:"row",
  justifyContent:"space-around",
  marginTop:30,
  backgroundColor:"black",
  height:100,
  top: -60,  
  overflow: "visible",
  paddingTop:30 
}

});

export default Screenpage;
