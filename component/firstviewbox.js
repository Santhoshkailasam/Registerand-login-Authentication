const FirstView = () => {
    return(
        <View style={styles.relaxbox}>
      <Text style={styles.relaxtext}>Relaxing Meditation</Text>
      <Text style={styles.audio}>7 day Audio and video series</Text>
      <View style={styles.overandflim}>
      <Overhead />
      <Flimrole style={styles.flimrole}/>
      </View>
     </View>
    );
};
const style = StyleSheet.create({
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
});
export default FirstView;