import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import {HEIGHT, WIDTH } from '../constants/contants'

const DiseaseDetails = ({item})=>{
    return(
        <View style= {styles.container}>
            <Image source = {{uri: item.image}} style = {styles.image}/>
            <View style={{
                        marginLeft: 10,
                        alignItems: 'center',
                        justifyContent: 'space-around',
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
        backgroundColor: '#fff',
        borderRadius: 10
    },
    image:{
        width: '42%', 
        height: '100%', 
        borderRadius: 5, 
        resizeMode: 'stretch',
        borderRadius: 10
    }
});

export default DiseaseDetails;