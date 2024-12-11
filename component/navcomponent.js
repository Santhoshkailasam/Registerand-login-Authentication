const Nav = () =>{
    return(
        <View style={styles.nav}>
           <Text>Insomania</Text>
       </View>
    );
};
const styles = StyleSheet.create({
  nav:{
    backgroundColor:"#a2faf6",
    width:100,
    height:40,
    paddingTop:7,
    paddingLeft:15,
    marginLeft:10,
    borderRadius:8,
    marginTop:10
  }
});
export default Nav;