import React from 'react';
import { TouchableOpacity } from 'react-native';
import {View, Text, StyleSheet} from 'react-native';
import {HEIGHT, WIDTH } from '../constants/contants'

const SwitchButton = ({title, action, color})=>{

    return(
        <TouchableOpacity 
            style={{
                height: HEIGHT * .09,
                width: 150,
                backgroundColor: `${color}`,
                borderRadius: 10,
                justifyContent: 'center',
                alignItems: 'center'                                                                                
            }}
        >
            <Text style={{fontSize: 18, fontWeight: 'bold'}}>{title}</Text>
            <Text style ={{fontSize: 20, fontWeight: 'bold'}}>{action}</Text>    
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({});

export default SwitchButton;