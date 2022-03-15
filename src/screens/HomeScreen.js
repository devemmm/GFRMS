import React from 'react';
import {View, Text, Platform, TouchableOpacity, StatusBar, StyleSheet } from 'react-native';
import { HEIGHT, WIDTH } from '../constants/contants'
import Disease from '../components/Disease';
import AtmosphareItem from '../components/AtmosphareItem';
import SwitchButton from '../components/SwitchButton';
import Clock from '../components/Clock';

const HomeScreen = ({navigation})=>{
    const diseases = [
        {
            id: 1,
            name: 'Africa Mole Cricket',
            type: 'Insect',
            image: 'https://www.google.com/imgres?imgurl=https%3A%2F%2Fwww.thoughtco.com%2Fthmb%2FgjYBUv9VdnXM96hZhxEKMiwfA8Q%3D%2F2576x2576%2Fsmart%2Ffilters%3Ano_upscale()%2Fladybird-brittany-france-502864869-5897a8315f9b5874ee735fca.jpg&imgrefurl=https%3A%2F%2Fwww.thoughtco.com%2Finsects-profile-130266&tbnid=g5xdTXJtVU348M&vet=12ahUKEwiz_4WT4ZPzAhVF44UKHS4MDBcQMygIegUIARDiAQ..i&docid=5lC5WZBlMif8SM&w=2576&h=2576&q=insect&ved=2ahUKEwiz_4WT4ZPzAhVF44UKHS4MDBcQMygIegUIARDiAQ',
        },
        {
            id: 2,
            name: 'Other deseas',
            type: 'Insect',
            image: 'https://www.google.com/imgres?imgurl=https%3A%2F%2Fwww.thoughtco.com%2Fthmb%2FgjYBUv9VdnXM96hZhxEKMiwfA8Q%3D%2F2576x2576%2Fsmart%2Ffilters%3Ano_upscale()%2Fladybird-brittany-france-502864869-5897a8315f9b5874ee735fca.jpg&imgrefurl=https%3A%2F%2Fwww.thoughtco.com%2Finsects-profile-130266&tbnid=g5xdTXJtVU348M&vet=12ahUKEwiz_4WT4ZPzAhVF44UKHS4MDBcQMygIegUIARDiAQ..i&docid=5lC5WZBlMif8SM&w=2576&h=2576&q=insect&ved=2ahUKEwiz_4WT4ZPzAhVF44UKHS4MDBcQMygIegUIARDiAQ',
        }
    ]
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
                    <AtmosphareItem icon = "temperature-low"  color = "green" degree = {62} dtype = "F" name= "Temperature"/>
                    <AtmosphareItem icon = "" color = "#537ec9" degree = {61} dtype = "%" name= "Humudity"/>
                </View>
                <View style = {{flexDirection: 'row',justifyContent: 'space-around'}}>
                    <AtmosphareItem icon = "cloud-moon-rain" color = "#8e53c9" degree = {0.0} dtype = "mm" name= "Rainfall"/>
                    <AtmosphareItem icon = "" color = "#c9c953" degree = {3.9} dtype = "m/s" name= "windSpeed"/>
                </View>
            </View>
            <View style={styles.buttonCard}>
                <SwitchButton title = "Fun" action = "OFF" color= "red"/>
                <SwitchButton title = "Heater" action = "ON" color= "206e37"/>
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