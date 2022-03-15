import React, {useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';

const currectTime = new Date();
const Clock = ()=>{
    const [hour, setHour] =useState(currectTime.getHours())
    const [min, setMin] = useState(currectTime.getMinutes())


    return(
        <View style = {styles.clock}>
            <Text style = {{color: '#fff', fontSize: 20, fontWeight: 'bold'}}>{hour} : {min}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    clock:{
        height: 80,
        width: 120,
        borderRadius: 80,
        backgroundColor: 'green',
        alignItems: 'center',
        justifyContent: 'center'
    }
});

export default Clock;