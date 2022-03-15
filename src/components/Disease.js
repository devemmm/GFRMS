import React from 'react';
import { FlatList } from 'react-native';
import {View, Text, StyleSheet} from 'react-native';
import {HEIGHT, WIDTH } from '../constants/contants'
import DiseaseDetails from './DiseaseDetails';

const Disease = ({diseases})=>{
    return(
        <View style={{marginLeft: 20}}>
            <Text style={styles.title}>Trending Diseases</Text>
            <FlatList
                horizontal
                showsHorizontalScrollIndicator = {false}
                data = {diseases}
                keyExtractor = {disease => disease.name}
                renderItem = {({item})=>{
                    return(
                        <View>
                            <DiseaseDetails item = {item}/>
                        </View>
                    )
                }}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 10
    }
});

export default Disease;