import React, {useState, useContext} from 'react';
import { View, Text, TouchableOpacity, TextInput, Platform, StatusBar, ActivityIndicator, StyleSheet } from 'react-native';
import { Context as AuthContext } from '../context/AuthContext'
import { HEIGHT, WIDTH } from '../constants/contants';

const SigninScreen = ({navigation})=>{

    const {state, signin, throwError, clearErrorMessage} = useContext(AuthContext)

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const isLoading = true;

    React.useEffect(()=>{
        return navigation.addListener('focus', clearErrorMessage);
    }, [navigation])

    return(
        <View style = {styles.container}>
            <Text style = {styles.title}>GFRS</Text>
            
            <View>
                <TextInput 
                    style = {styles.inputField}
                    autoCapitalize = "none"
                    autoCorrect = {false}
                    placeholder = "Email"
                    value = {email}
                    onChangeText = {(input)=>setEmail(input)}
                /> 

                <TextInput 
                    style = {styles.inputField}
                    autoCapitalize = "none"
                    autoCorrect = {false}
                    secureTextEntry
                    placeholder = "Password"
                    value = {password}
                    onChangeText = {(input)=>setPassword(input)}
                />  
                {state.errorMessage ? <Text style = {styles.errorMessage}>{state.errorMessage}</Text> : null}

                {state.isLoading ? <ActivityIndicator size="large" color="#00ff00"/>: null}
                <TouchableOpacity
                    style = {styles.loginButton}
                    onPress = {()=>{
                        if(email.length <8){
                            throwError("wrong email")
                        }else if(state.errorMessage){
                            return null;
                        }else{
                            signin({email, password}, ()=>navigation.navigate("mainFlow"))
                        }
                    }}
                >

                    <Text style = {styles.loginText}>Login</Text>    
                </TouchableOpacity>                                                            
            </View>

            <TouchableOpacity
                style = {styles.link}
                onPress = {()=> navigation.navigate("Signup")}
            >
                
                <Text style = {styles.linkText}>You don't have Account Signup instead</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        paddingTop: Platform.OS == 'ios' ? 12 : StatusBar.currentHeight,
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#527a87'
    },
    logoCard: {
        marginTop: HEIGHT * .1,

    },
    logoIcon: {
        height: HEIGHT * .1,
        width: WIDTH * .2,
        backgroundColor: 'red',
        borderRadius: HEIGHT * .1
    },
    textLogo: {
        fontSize: 30,
        fontWeight: 'bold'
    },
    title: {
        color: '#fff',
        fontSize: 30,
        fontWeight: 'bold',
        textAlign: 'center',
        marginTop: HEIGHT * .02,
        marginBottom: HEIGHT * .1,
        textTransform: 'uppercase'
    },
    inputField: {
        backgroundColor: '#fff',
        width: WIDTH * .7,
        height: HEIGHT * .06,
        fontSize: 20,
        fontWeight: 'bold',
        paddingHorizontal: 10,
        justifyContent: 'center',
        borderRadius: 5,
        marginTop: HEIGHT * .02,
        textAlign: 'center'
    },
    errorMessage:{
        color: 'red',
        textAlign: 'center',
        marginTop: 10,
        fontSize: 16
    },
    loginButton:{
        backgroundColor: '#2caeb0',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: HEIGHT * .05,
        borderRadius: 20,
        height: HEIGHT * .07
    },
    loginText: {
        fontSize: 20,
        color: '#fff',
        fontWeight: 'bold'
    },
    link:{
        marginTop: HEIGHT * .3,
        alignItems: 'flex-end',
        flex: 1,
        justifyContent: 'flex-end'
    },
    linkText:{
        fontSize: 16,
        color: '#2caeb0',
        textAlign: 'center',
        marginBottom: HEIGHT * .05
    }
})

export default SigninScreen