import React, { useState } from 'react';
import {
  Text,
  View,
  StyleSheet,
  SafeAreaView,
  StatusBar,
  Image,
  TouchableOpacity,
  Dimensions,
  TextInput,
} from 'react-native';


function Signup({navigation}) {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar
        animated={true}
        translucent backgroundColor="transparent"
        barStyle={'light-content'}
        hidden={false}
      />
      <Image
        style={styles.image}
        source={require('./images/plant2.jpeg')}
      />
      <View style={styles.textContainer}>
        <Text style={styles.headText}>Sign Up</Text>
        <Text style={styles.headText2}>Create your new account</Text>
      </View>

      <View style={styles.inputContainer}>
      <TextInput
            style={styles.input}
            placeholder=" Full Name"
            placeholderTextColor="#118844"
            autoCapitalize="words"
            value={name}
            onChangeText={(text) => setName(text)}
            inlineImageLeft="user"
            inlineImagePadding={3}
            underlineColorAndroid="transparent"
          />
        <TextInput
          style={styles.input}
          placeholder=" example@gmail.com"
          placeholderTextColor="#118844"
          keyboardType="email-address"
          autoCapitalize="none"
          value={email}
          onChangeText={(text) => setEmail(text)}
          inlineImageLeft="email"
          inlineImagePadding={3}
          underlineColorAndroid="transparent"

        />
        <TextInput
          style={styles.input}
          placeholder=" Password"
          placeholderTextColor="#118844"
          secureTextEntry
          value={password}
          onChangeText={(text) => setPassword(text)}
          inlineImageLeft="passwordlock"
          inlineImagePadding={3}
        />
      </View>


      <TouchableOpacity style={styles.button} >
        <Text style={styles.buttonText}>Sign Up</Text>
      </TouchableOpacity>


      <View style={styles.horizontalRule}>
        <View style={styles.horizontalRule2} />
        <View>
          <Text style={styles.rulerText}>Or Continue With</Text>
        </View>
        <View style={styles.horizontalRule2} />
      </View>


      <TouchableOpacity style={styles.button2} >
        <View style={styles.googleButton}>
          <Image
            source={require('./images/google.png')}
            style={styles.googleIcon}
          />
          <Text style={styles.buttonText2}>Sign Up with Google</Text>
        </View>
      </TouchableOpacity>

      <View style={styles.footerContainer}>
        <Text style={styles.footerText}>Already have an account? </Text>
        <TouchableOpacity onPress={() => navigation.navigate('Signin')}>
          <Text style={styles.signUpButton}>Sign In</Text>
        </TouchableOpacity>
      </View>


    </SafeAreaView>
  )

};
const screenHeight = Dimensions.get('window').height;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff'
  },
  image: {
    height: screenHeight * 0.3,
    width: '100%',
    resizeMode: 'cover'
  },
  textContainer: {
    alignItems: 'center',
    alignContent: 'center'
  },
  headText: {
    fontFamily: 'Poppins',
    color: '#118844',
    fontSize: 25,
    fontWeight: '900',
    marginTop: '10%'

  },
  headText2: {
    fontFamily: 'Poppins',
    color: '#535252',
    fontSize: 15,
    fontWeight: '500',
    marginTop: '2%'

  },
  inputContainer: {
    margin: '4%'
  },
  input: {
    height: 45,
    color: 'black',
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 12,
    marginBottom: 16,
    paddingHorizontal: 10,
    backgroundColor: '#EBFDF2'
  },

  button: {
    backgroundColor: '#118844',
    padding: 20,
    borderRadius: 10,
    margin: '4%',
  },
  buttonText: {
    color: 'white',
    fontFamily: 'Poppins',
    fontWeight: '600',
    fontSize: 18,
    textAlign: 'center',

  },
  horizontalRule: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: '4%',
    marginLeft: '4%',
    marginRight: '4%',
  },
  horizontalRule2: {
    flex: 1,
    height: 1,
    backgroundColor: 'black',
    marginRight: 8
  },
  rulerText: {
    color: '#118844',
    marginRight: 8
  },
  googleButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent:'center'
  },
  googleIcon: {
    height:30,
    width:30,
    marginRight:8
  },
  button2: {
    backgroundColor: '#118844',
    padding: 20,
    borderRadius: 10,
    margin: '4%',
  },
  buttonText2: {
    color: 'white',
    fontFamily: 'Poppins',
    fontWeight: '700',
    fontSize: 18,
    textAlign: 'center',

  },
  footerContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 6,
  },
  footerText: {
    fontSize: 16,
    color: '#118844',
  },
  signUpButton: {
    fontSize: 16,
    color: '#5F6160',
    fontWeight: 'bold',
  },
});

export default Signup;