import Register from "./Reeggister";
import Login from "./Login";
import Screenpage from "./first page"; 
import { createNativeStackNavigator } from "@react-navigation/native-stack"; 
import { NavigationContainer } from "@react-navigation/native"; 
const Stack = createNativeStackNavigator();
export default function App() {
  return (
  <NavigationContainer>
    <Stack.Navigator initialRouteName="Login">
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Register" component={Register} />
      <Stack.Screen name="Screenpage" component={Screenpage} />
    </Stack.Navigator>
  </NavigationContainer>
  );
}

