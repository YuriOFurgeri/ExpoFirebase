import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './src/pages/login/home';
import Login from './src/pages/login';

export default function App() {
  const Stack = createNativeStackNavigator();
  
  return (


  <NavigationContainer>

    <Stack.Navigator>

    <Stack.Screen
    name ='login'
    component = {Login}
    options={{
      headerShown:false
    }}
    />

    <Stack.Screen
    name ='home'
    component = {Home}
    options={{
      headerLeft:null
    }}
    />

    </Stack.Navigator>

  </NavigationContainer>
   
  );

}





//const styles = StyleSheet.create({});






//SERÁ UM BANCO DE DADOS NÃO RELACIONAL = MAIS RÁPIDO (BASEADO EM DOCUMENTOS E BASE DE DADOS) BEM MAIS ÁGIL - PODE USAR ÁRVORE
