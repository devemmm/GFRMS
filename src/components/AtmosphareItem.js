import React from 'react';
import {View, Text, StyleSheet } from 'react-native'
import { FontAwesome5 } from '@expo/vector-icons';

const AtmosphareItem = ({icon, color, degree, dtype, name})=>{
    return(
        <View style={styles.container}>
            <View 
                style = {{
                            height: 50, 
                            width: 50, 
                            backgroundColor: `${color}`, 
                            borderRadius: 50,
                            marginRight: 10,
                            justifyContent: 'center',
                            alignItems: 'center'
                        }}>
                <FontAwesome5 name={`${icon}`} size={24} color="#fff" />
            </View>
            <View>
                <Text style={{fontSize: 20, color: 'black', fontWeight: 'bold'}}>{degree}' {dtype}</Text>
                <Text>{name}</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flexDirection: 'row',
        marginHorizontal: 10
    },
    iconCard: {
        height: 50, 
        width: 50, 
        backgroundColor: 'red', 
        borderRadius: 50,
        marginRight: 10
    }
})

export default AtmosphareItem;