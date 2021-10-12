import React, {useContext} from 'react';
import {View, Text, Platform, StatusBar, StyleSheet } from 'react-native';
import { Context as AuthContext} from '../context/AuthContext';
import { HEIGHT, WIDTH } from '../constants/contants'

const AccountScreen = ({navigation})=>{

    const {state} = useContext(AuthContext)
    // console.log(state)
    return(
        <View>
            <Text>AccountScreen</Text>
        </View>
    )
}

const styles = StyleSheet.create({})
export default AccountScreen;