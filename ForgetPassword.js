import React, { useState } from 'react';
import {
    Text,
    View,
    StyleSheet,
    SafeAreaView,
    StatusBar,
    Image,
    TouchableOpacity,
    TextInput,
} from 'react-native';


function ForgetPassword({ navigation }) {
    const [email, setEmail] = useState('');

    return (
        <SafeAreaView style={styles.container}>
            <StatusBar
                animated={true}
                translucent backgroundColor="transparent"
                barStyle={'dark-content'}
                hidden={false}
            />

            <Text style={styles.headerText}>Forgot Password</Text>

            <View>
                <Text style={styles.emailText}>Enter Email Address</Text>
                <Text style={styles.emailText2}>Enter your email to get link reset your password</Text>
            </View>

            <View style={styles.inputContainer}>
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
            </View>

            <TouchableOpacity style={styles.button} onPress={()=>navigation.navigate('Verification')}>
                <Text style={styles.buttonText}>Send</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('Signin')}>
                <Text style={styles.signinButton}>Back to Sign In</Text>
            </TouchableOpacity>

        </SafeAreaView>
    )

};
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffffff'
    },
    headerText: {
        color: '#3D3E3D',
        fontFamily: 'Poppins',
        fontWeight: '700',
        fontSize: 22,
        textAlign: 'center',
        margin: '20%',
        lineHeight: 22,
        letterSpacing: 1.6
    },
    emailText: {
        color: '#3D3E3D',
        fontFamily: 'Poppins',
        fontWeight: '600',
        fontSize: 22,
        lineHeight: 22,
        marginLeft: '8%'
    },
    emailText2: {
        color: '#ABABAB',
        fontFamily: 'Poppins',
        fontWeight: '500',
        fontSize: 13,
        marginTop: '6%',
        marginLeft: '8%'
    },
    inputContainer: {
        margin: '8%'
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
        marginLeft: '8%',
        marginRight: '8%',

    },
    buttonText: {
        color: 'white',
        fontFamily: 'Poppins',
        fontWeight: '600',
        fontSize: 18,
        textAlign: 'center',

    },
    signinButton: {
        fontSize: 15,
        color: '#E85C4D',
        fontWeight: 'bold',
        marginTop: '6%',
        textAlign:'right',
        marginRight:'8%'
    },
});

export default ForgetPassword;