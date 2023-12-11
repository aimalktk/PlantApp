import React, { useState } from 'react';
import {
    Text,
    View,
    StyleSheet,
    SafeAreaView,
    StatusBar,
    TouchableOpacity,
} from 'react-native';
import {
    CodeField,
    Cursor,
    useBlurOnFulfill,
    useClearByFocusCell,
} from 'react-native-confirmation-code-field';


const CELL_COUNT = 4;

function Verification({ navigation }) {

    const [value, setValue] = useState('');
    const ref = useBlurOnFulfill({ value, cellCount: CELL_COUNT });
    const [props, getCellOnLayoutHandler] = useClearByFocusCell({
        value,
        setValue,
    });

    return (
        <SafeAreaView style={styles.container}>
            <StatusBar
                animated={true}
                translucent backgroundColor="transparent"
                barStyle={'dark-content'}
                hidden={false}
            />

            <View>
                <Text style={styles.headerText}>Verification</Text>
                <Text style={styles.middletext}>Enter Verification Code</Text>

            </View>
            


            <View style={styles.root}>
                <CodeField
                    ref={ref}
                    {...props}
                    value={value}
                    onChangeText={setValue}
                    cellCount={CELL_COUNT}
                    rootStyle={styles.codeFiledRoot}
                    keyboardType="number-pad"
                    textContentType="oneTimeCode"
                    renderCell={({ index, symbol, isFocused }) => (
                        <Text
                            key={index}
                            style={[styles.cell, isFocused && styles.focusCell,
                            { borderRadius: 30 },]}
                            onLayout={getCellOnLayoutHandler(index)}>
                            {symbol || (isFocused ? <Cursor /> : null)}
                        </Text>
                    )}
                />

            </View>

            <View>
                <Text style={styles.emailText}>OTP was send to your email,</Text>
                <Text style={styles.email}>shayanzameer@gmail.com</Text>
            </View>

            <TouchableOpacity style={styles.button} onPress={()=>navigation.navigate('ChangePassword')} >
                <Text style={styles.buttonText}>Verify</Text>
            </TouchableOpacity>

            <View>
                <Text style={styles.footerText}>Code expires in 5 min,</Text>
                <View style={styles.footerContainer}>
                    <Text style={styles.footerText}>If you didnt receive a code, </Text>
                    <TouchableOpacity onPress={()=>navigation.navigate('Verification')}>
                        <Text style={styles.resendButton}>Resend</Text>
                    </TouchableOpacity>
                </View>
            </View>

        </SafeAreaView>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffffff',
        padding: 20
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
    middletext: {
        fontFamily: 'Montserrat',
        fontWeight: '600',
        fontSize: 16,
        color: '#444444',
        textAlign: 'center'
    },
    root: {
        padding: 45,
    },
    codeFiledRoot: {
        marginTop: 20
    },
    cell: {
        color: '#444444',
        width: 50,
        height: 50,
        lineHeight: 48,
        fontSize: 24,
        borderWidth: 2,
        borderColor: '#444444',
        textAlign: 'center',
    },
    focusCell: {
        borderColor: '#000',
    },
    emailText: {
        fontFamily: 'Montserrat',
        fontWeight: '500',
        fontSize: 12,
        color: '#ABABAB',
        textAlign: 'center',
        lineHeight: 12,
        margin: '2%'
    },
    email: {
        fontFamily: 'Poppins',
        fontWeight: '500',
        fontSize: 10,
        color: '#118844',
        textAlign: 'center',

    },
    button: {
        backgroundColor: '#118844',
        padding: 20,
        borderRadius: 20,
        margin: '14%',
    },
    buttonText: {
        color: 'white',
        fontFamily: 'Poppins',
        fontWeight: '600',
        fontSize: 18,
        textAlign: 'center',

    },
    footerText: {
        fontFamily: 'Montserrat',
        fontWeight: '500',
        fontSize: 12,
        color: '#ABABAB',
        textAlign: 'center',
    },
    
    footerContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 6,
    },
    resendButton: {
        fontSize: 12,
        color: '#E85C4D',
        fontWeight: 'bold',
    },
});

export default Verification;