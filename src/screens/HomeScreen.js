import React, {useReducer, useEffect} from 'react';
import {View, Text, Platform, TouchableOpacity, StatusBar, StyleSheet } from 'react-native';
import { HEIGHT, WIDTH, diseases } from '../constants/contants'
import Disease from '../components/Disease';
import AtmosphareItem from '../components/AtmosphareItem';
import SwitchButton from '../components/SwitchButton';
import Clock from '../components/Clock';
import gfrsApi from "../api/gfrsApi"

const reducer = (state, action)=>{

    switch(action.type){
        case 'temperature':
            
            if(action.payload.temperature){
                return {...state}
            }   
            return {...state, temperature: action.payload.temperature}

        case 'humity':
        
            if(action.payload.humudity){
                return {...state}
            }   
            return {...state, humudity: action.payload.humudity}

        case 'fun':
            return {...state, fun: action.payload.fun, both: "OFF", heater: "OFF"}
        case 'both':
            return {...state, both: action.payload.both, fun: "OFF", heater: "OFF"}
        case 'heater':
            return {...state, heater: action.payload.heater, fun: "OFF", both: "OFF"}

        default : 
            return state
    }
}

const HomeScreen = ({navigation})=>{
    const [{temperature, humudity, windSpeed, rainfall, fun, both, heater}, dispatch]= useReducer(reducer, {temperature: 0, humudity: 61, rainfall: 0, windSpeed: 3.9, fun: 'OFF', both: 'OFF', heater: 'OFF'})

    useEffect(()=>{
        const interval = setInterval(() => {

            let fid = '623093005533f833a0561c5d'
            let type = 'last'

            const url = `https://gfrms-api.herokuapp.com/data?fid=${fid}&type=${type}`

            fetch(url, {
                method: "get",
                headers: {
                  Accept: "application/json",
                  "Content-Type": "application/json",
                }
            })
            .then((response)=> response.json())
            .then((res)=>{
            
                console.log("here")
                // console.log(res.data)
                dispatch({type: 'fun', payload: {fun: res.data.fun == 0 ? "OFF": "ON"}})
                dispatch({type: 'temperature', payload: { temperature: res.data.temperature}})
                dispatch({type: 'humity', payload: { humudity: res.data.humudity}})
            }).catch((error)=>{
                console.log("something went wrong")
            })
            
        }, 3000);

        return ()=> clearInterval(interval)
    }, [temperature])

    const handleButtonPress = ({type, action})=>{

        let isOn;
        switch(type){
            case 'Fun':
                isOn = fun === "ON"
                return dispatch({type: 'fun', payload: {fun: isOn ? "OFF" : "ON"}})

            case 'Both':
                isOn = both === "ON"
                return dispatch({type: 'both', payload: {both: isOn ? "OFF" : "ON"}})
            
            case 'Heater':
                isOn = heater === "ON"
                return dispatch({type: 'heater', payload: {heater: isOn ? "OFF" : "ON"}})
    
            default:
                return;
        }
    }
    return(
        <View style = {styles.container}>

            <View style={styles.header}>
                <View style = {styles.greetings}>
                    <Text style= {{color: '#fff', fontSize: 20, fontWeight: 'bold'}}>Hello, Emmanuel</Text>
                    <Text style = {{color: '#fff', fontSize: 25}}>It's sunny day!</Text>
                </View>

                <TouchableOpacity
                    style={styles.historyButton}
                >
                    <Text style = {{color: '#fff'}}>icon </Text>
                    <Text style = {{color: '#fff'}}> History</Text>
                </TouchableOpacity>
                    
            </View>
            <View style= {styles.humudityBord}>
                <View style= {{flexDirection: 'row',justifyContent: 'space-around'}}>
                    <AtmosphareItem icon = "temperature-low"  color = "green" degree = {temperature} dtype = "F" name= "Temperature"/>
                    <AtmosphareItem icon = "" color = "#537ec9" degree = {humudity} dtype = "%" name= "Humudity"/>
                </View>
                <View style = {{flexDirection: 'row',justifyContent: 'space-around'}}>
                    <AtmosphareItem icon = "cloud-moon-rain" color = "#8e53c9" degree = {rainfall} dtype = "mm" name= "Rainfall"/>
                    <AtmosphareItem icon = "" color = "#c9c953" degree = {windSpeed} dtype = "m/s" name= "windSpeed"/>
                </View>
            </View>

            <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-start', width: '90%', marginBottom: 20}}>
                <SwitchButton title="Fun" action={fun} triger={handleButtonPress}/>
                <SwitchButton title="Both" action={both} triger={handleButtonPress}/>
                <SwitchButton title="Heater" action={heater} triger={handleButtonPress}/>
            </View>

            <View style = {{alignItems: 'center'}}>
                <Clock/>
            </View>
            <View style = {{ justifyContent: 'flex-end', flex: 1}}>
                <Disease diseases = {diseases}/>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: '#dae0e0'
    },
    header:{
        paddingTop: Platform.OS === 'ios' ? 12 : StatusBar.currentHeight,
        height: HEIGHT * .3,
        width: WIDTH,
        backgroundColor: 'green',
        flexDirection: 'row', 
        alignItems: 'flex-start',
        justifyContent: 'space-between'
    },
    greetings:{
        marginLeft: 20,
        paddingTop: 15
    },
    historyButton:{
        marginRight: 20,
        flexDirection: 'row',
        marginTop: HEIGHT * .05,
        backgroundColor: '#056621',
        height: 35,
        width: 110,
        borderRadius: 35,
        justifyContent: 'center',
        alignItems: 'center'
    },
    humudityBord:{
        backgroundColor: '#fff',
        height: 200,
        width: WIDTH - 40,
        marginTop: -100,
        marginLeft: 20,
        marginBottom: 20,
        borderRadius: 10,
        justifyContent: 'space-evenly'
    },
    buttonCard:{
        backgroundColor: 'green',
        height: HEIGHT * .09,
        width: WIDTH - 40,
        marginLeft: 20,
        marginBottom: 20,
        borderRadius: 10,
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    diseasesCard:{
        flexDirection: 'row',
        alignItems: 'flex-end',
        justifyContent: 'space-between',
        // borderWidth: 10,
        // borderColor: 'black',
        // height: HEIGHT * .25,
        flex: 1,
        marginBottom: 10
    }
})
export default HomeScreen;