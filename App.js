import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Cart from './src/screens/Cart';
import Home from './src/screens/Home';
import Login from './src/screens/Login';


export default function App() {
  return (
    <View>
      {/* <Login /> */}
      {/* <Home /> */}
      <Cart />
    </View>
  );
}

