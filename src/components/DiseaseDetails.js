import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import {HEIGHT, WIDTH } from '../constants/contants'

const DiseaseDetails = ({item})=>{
    // console.log(disease)
    return(
        <View style= {styles.container}>
            {/* <Image source = {{uri: item.image}} style = {styles.image}/> */}
            <View style={{height: 100, width: 100, backgroundColor: 'red', marginLeft: 10, borderRadius: 10}}/>

            <View style={{
                        marginLeft: 10,
                        alignItems: 'center',
                        justifyContent: 'space-around'
                    }}>
                <Text style = {{fontSize: 16, fontWeight: 'bold'}}>{item.name}</Text>
                <Text>({item.type})</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        marginRight: 20,
        alignItems: 'center',
        flexDirection: 'row',
        marginBottom: 10,
        height: HEIGHT * .15,
        width: WIDTH * (3/4),
        backgroundColor: '#fff'
    },
    image:{
        height: 200,
        width: 200
    }
});

export default DiseaseDetails;