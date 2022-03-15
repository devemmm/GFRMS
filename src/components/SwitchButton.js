import React from 'react';
import { TouchableOpacity } from 'react-native';
import {Text, StyleSheet} from 'react-native';

const SwitchButton = ({title, action, triger})=>{

    return(
        <TouchableOpacity 
            style={{backgroundColor: action === "OFF" ? 'red': 'green' , width: '30%', height: 35, borderRadius: 5, marginHorizontal: 10, alignItems: 'center', justifyContent: 'center'}}
                onPress = {()=>triger({type: title, action})}
            >
            <Text style={{color: 'black', fontWeight: 'bold'}} >{title} {title === "Both" ? "OFF" : action}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({});

export default SwitchButton;