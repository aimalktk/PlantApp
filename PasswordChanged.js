import React from 'react';
import {
    Text,
    View,
    StyleSheet,
    SafeAreaView,
    StatusBar,
    Image,
    TouchableOpacity,
    TextInput,
    ImageBackground,
} from 'react-native';


function PasswordChanged({ navigation }) {

    return (
        <SafeAreaView style={{flex:1}}>
            <ImageBackground
                source={require('./images/background.jpg')}
                style={styles.backgroundImage}
            >
                
                <View style={styles.container}>
                    <StatusBar
                        animated={true}
                        translucent backgroundColor="transparent"
                        barStyle={'light-content'}
                        hidden={false}
                    />


                    <View style={styles.box}>

                        <Image
                            style={styles.image}
                            source={require('./images/success.png')}
                        />
                        <Text style={styles.successText}>Password Changed Successfully</Text>

                        <Text style={styles.loginText}>You can now log in with your new password</Text>

                        <TouchableOpacity style={styles.button} onPress={()=>navigation.navigate('Signin')} >
                            <Text style={styles.buttonText}>Sign In</Text>
                        </TouchableOpacity>
                    </View>

                </View>
            </ImageBackground>

        </SafeAreaView>
    )

};
const styles = StyleSheet.create({
    backgroundImage: {
        flex: 1,
    },
    container: {
        flex: 1,
        justifyContent:'center'
    },

    box: {
        borderRadius:30,
        backgroundColor:'#FFFFFF',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        marginLeft: '8%',
        marginRight: '8%',
        padding:10,

    },
    image: {
        height: '30%',
        width: '30%',
        resizeMode: 'contain',
    },
    successText: {
        color: '#118844',
        fontFamily: 'Poppins',
        fontWeight: '600',
        fontSize: 24,
        lineHeight: 25,
        textAlign: 'center',
        padding: 5
    },
    loginText: {
        color: '#868686',
        fontFamily: 'Poppins',
        fontWeight: '500',
        fontSize: 15,
        textAlign: 'center',
        padding: 15,
        marginTop: '8%'
    },
    button: {
        backgroundColor: '#118844',
        padding: 20,
        borderRadius: 10,
        margin: '8%',
        width:'50%'

    },
    buttonText: {
        color: 'white',
        fontFamily: 'Poppins',
        fontWeight: '600',
        fontSize: 18,
        textAlign: 'center',

    },

});

export default PasswordChanged;