import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet} from 'react-native';

const Clock = ()=>{

    const [{hour, min, sec}, setState] = useState({hour: 0, min: 0, sec: 0})
    useEffect(()=>{
        const interval = setInterval(()=>{
            setState({hour: new Date().getHours(), min: new Date().getMinutes(), sec: new Date().getSeconds()})
        }, 1000)
        
        return ()=> clearInterval(interval)
    }, [hour, min])

    


    return(
        <View style = {styles.clock}>
            <Text style = {{color: '#fff', fontSize: 20, fontWeight: 'bold'}}>{hour} : {min}: {sec}</Text>
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