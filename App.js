import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Home from "./screens/Home";
import Login from "./screens/Login";
import User from "./screens/User";
import Sign from "./screens/Sign";
import Otp from "./screens/Otp";
import Dial from "./screens/Dial";
import Convo from "./screens/Convo";




const Stack = createNativeStackNavigator();


const MyStack = ()  => {
  return (

    <NavigationContainer>
        <Stack.Navigator>
            <Stack.Screen
            name="Home"
            component={Home}
            options={{title: "Chatter"}}
            />
               <Stack.Screen
            name="Login"
            component={Login}
            />
            <Stack.Screen
            name="User"
            component={User}
            />
             <Stack.Screen
            name="Sign"
            component={Sign}
            />
             <Stack.Screen
            name="Otp"
            component={Otp}
            />
       
             <Stack.Screen
            name="Dial"
            component={Dial}
            />
             <Stack.Screen
            name="Convo"
            component={Convo}
            />
        </Stack.Navigator>
    </NavigationContainer>


  );
}

export default MyStack


