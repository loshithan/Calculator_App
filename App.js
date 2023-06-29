// import { StatusBar } from 'expo-status-bar';
// import React, { useState } from 'react';
// import { StyleSheet, Text, View, Switch } from 'react-native';
// import { ThemeProvider } from './src/ThemeContext';
// import MyKeyboard from './src/MyKeyboard';

// export default function App() {
//   const [theme, setTheme] = useState('light');

//   const toggleTheme =  () => setTheme(theme === 'light' ? 'dark' : 'light')
//   return (
//      <ThemeProvider value={{ theme}}>
//       <View style={theme === 'light' ? styles.container : [styles.container, { backgroundColor: '#000' }]}>
//         <StatusBar style="auto" />
//         <Switch
//           ios_backgroundColor='black'
//           value={theme === 'dark'}
//           onValueChange={toggleTheme}
//         />
//         <MyKeyboard/>
//       </View>
//     </ThemeProvider>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });

import {useState} from 'react';
import {SafeAreaView, StyleSheet, Switch, Text} from "react-native";
import { myColors } from './src/Color';
import { ThemeContext } from './src/ThemeContext';
import MyKeyboard from './src/MyKeyboard';

export default function App(){
  const [theme, setTheme] = useState('light');
  return(
    <ThemeContext.Provider value={theme}>
      <SafeAreaView style={theme === 'light' ? styles.container : [styles.container, {backgroundColor: 'black'}]}>
        <Switch 
          value={theme === 'dark'}
          onValueChange={() => setTheme(theme === 'light' ? 'dark' : 'light')}
          ios_backgroundColor="black"
        />
        <MyKeyboard />
      </SafeAreaView>
    </ThemeContext.Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: myColors.light,
    alignItems: 'center',
    justifyContent: 'flex-start',
  }
})