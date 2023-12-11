import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Signin from './Signin';
import Signup from './Signup';
import {
  Text,
  View,
  StyleSheet,
  Button,
  SafeAreaView,
  StatusBar,
  Image,
  TouchableOpacity,
} from 'react-native';

function Home({navigation}) {
  
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar
        animated={true}
        backgroundColor="#ffffff"
        barStyle={'dark-content'}
        hidden={false}
      />
      <View style={styles.textContainer}>
        <Text style={styles.headText}>The Best App For Your Plant</Text>
      </View>

      <Image
        style={styles.image}
        source={require('./images/plantimg.jpeg')}
      />
      <TouchableOpacity style={styles.button} onPress={()=> navigation.navigate('Signin')} >
        <Text style={styles.buttonText}>Sign In</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button2 } onPress={()=> navigation.navigate('Signup')} >
        <Text style={styles.buttonText2}>Create An Account</Text>
      </TouchableOpacity>


    </SafeAreaView>
  )

};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff'
  },
  textContainer: {
    width: '70%'
  },
  headText: {
    fontFamily: 'Poppins',
    color: '#184A2C',
    fontSize: 32,
    letterSpacing: 2,
    fontWeight: '900',
    marginTop: '15%',
    marginLeft: '15%',
  },
  image: {
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: '5%'
  },
  button: {
    backgroundColor: '#118844',
    padding: 20,
    borderRadius: 10,
    margin:'4%',
  },
  buttonText: {
    color: 'white',
    fontFamily:'Poppins',
    fontWeight:'600',
    fontSize: 18,
    textAlign: 'center',
    
  },
  button2: {
    backgroundColor: '#ffffff',
    padding: 20,
    borderWidth:2,
    borderColor:'#118844',
    borderRadius: 10,
    margin:'4%',
  },
  buttonText2: {
    color: '#118844',
    fontFamily:'Poppins',
    fontWeight:'700',
    fontSize: 18,
    textAlign: 'center',
    
  },
});

export default Home;
