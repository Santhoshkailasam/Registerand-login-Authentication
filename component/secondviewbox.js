const Secondview = () =>{
    <View style={styles.relaxsongbox}>
      <Text style={styles.relaxtext}>Relax Songs</Text>
      <Text style={styles.audio}>sometimes the most productive thing you can do relax</Text>
      <View style={styles.playbox}>
        <Text style={styles.play}>Play now </Text>
        <Playnow style={styles.playsvg} />
      </View>
     </View>
};
const style=StyleSheet.create({
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
});
export default Secondview;