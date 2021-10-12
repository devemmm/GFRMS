import React from 'react';
import { View, Text, TextInput, TouchableOpacity, ImageBackground, Platform, StatusBar, StyleSheet } from 'react-native';
import { HEIGHT, WIDTH} from '../constants/contants'

const SignupScreen = ({navigation})=>{
    return(
        <View style = {styles.container}>
            <ImageBackground
                source = {require('../../assets/images/gfrs_bg.jpg')}
                resizeMode = "cover"
                style = {styles.backgroundImage}
            >
                <Text style = {styles.title}>GfRS</Text>
                <View style = {styles.form}>
                    <Text style = {styles.inputLabel}>First Name</Text>
                    <TextInput  
                        style = {styles.inputField}
                        autoCapitalize = "none"
                        autoCorrect = {false}
                    />

                    <Text style = {styles.inputLabel}>Last Name</Text>
                    <TextInput  
                        style = {styles.inputField}
                        autoCapitalize = "none"
                        autoCorrect = {false}
                    />

                    <Text style = {styles.inputLabel}>Phone</Text>
                    <TextInput  
                        style = {styles.inputField}
                        autoCapitalize = "none"
                        autoCorrect = {false}
                        keyboardType = 'phone-pad'
                        maxLength = {10}
                    />

                    <Text style = {styles.inputLabel}>Email</Text>
                    <TextInput  
                        style = {styles.inputField}
                        autoCapitalize = "none"
                        autoCorrect = {false}
                    />

                    <Text style = {styles.inputLabel}>Password</Text>
                    <TextInput  
                        style = {styles.inputField}
                        autoCapitalize = "none"
                        autoCorrect = {false}
                    />

                    <TouchableOpacity
                        style = {styles.loginButton}
                    >

                        <Text style = {styles.loginText}>Signup</Text>    
                    </TouchableOpacity>  
                                                    
                </View>
                <View style = {styles.linkCard}>
                    <Text style = {styles.linkText}>Already have an account? </Text>
                    <TouchableOpacity
                        onPress = {()=> navigation.navigate("Signin")}
                    >
                        <Text style = {styles.link}> Login instead</Text>
                    </TouchableOpacity>
                </View> 
            </ImageBackground> 
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        paddingTop: Platform.OS == 'ios' ? 12 : StatusBar.currentHeight,
        backgroundColor: 'green',
        flex: 1
    },
    backgroundImage:{
        flex: 1,
        // opacity: 0.2,
        backgroundColor: '#19451a'
    },
    title:{
        textAlign: 'center',
        fontSize: 30,
        fontWeight: 'bold',
        textTransform: 'uppercase',
        color: '#fff'
    },  
    form:{
        marginTop: 20,
        marginHorizontal: WIDTH * .05
    },
    inputLabel: {
        fontSize: 18,
        color: 'black',
        marginTop: 20,
        color: '#fff',
        fontWeight: 'bold'
    },
    inputField:{
        borderColor: 'grey',
        borderBottomWidth: 2,
        height: HEIGHT * .05,
        paddingRight: 10,
        fontSize: 18,
        fontWeight: 'bold'   
    },
    loginButton:{
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: HEIGHT * .05,
        borderRadius: 20,
        height: HEIGHT * .07,
    },
    loginText: {
        fontSize: 20,
        color: 'black',
        fontWeight: 'bold'
    },
    linkCard:{
        justifyContent: 'center',
        alignItems: 'flex-end',
        flexDirection: 'row',
        flex: 1,
        paddingBottom: HEIGHT * .05
    },
    linkText: {
        color: '#fff',
        fontSize: 16
    },
    link:{
        color: 'orange',
        fontSize: 18
    }
})

export default SignupScreen