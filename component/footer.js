const Footer = () => {
    return(
    <View style={styles.footer}>
     <Explore />
     <Statice />
     <User />
    </View>
    );
};
const style= StyleSheet.create({
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
export default Footer;
