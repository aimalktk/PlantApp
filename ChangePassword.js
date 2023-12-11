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


function ChangePassword({ navigation }) {
    const [password, setPassword] = useState('');

    return (
        <SafeAreaView style={styles.container}>
            <StatusBar
                animated={true}
                translucent backgroundColor="transparent"
                barStyle={'dark-content'}
                hidden={false}
            />

            <Text style={styles.headerText}>Change Password</Text>

            <View>
                <View>
                    <Text style={styles.text1}>Enter New Password</Text>
                </View>
                <View style={styles.inputContainer}>
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
            </View>

            <View>
                <View>
                    <Text style={styles.text1}>Confirm New Password</Text>
                </View>
                <View style={styles.inputContainer}>
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
            </View>

            <TouchableOpacity style={styles.button} onPress={()=>navigation.navigate('PasswordChanged')} >
                <Text style={styles.buttonText}>Confirm</Text>
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
    text1: {
        color: '#3D3E3D',
        fontFamily: 'Poppins',
        fontWeight: '600',
        fontSize: 22,
        lineHeight: 22,
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

});

export default ChangePassword;