import React, {useState, useEffect} from "react";
import { Text, View, ScrollView,StyleSheet, ActivityIndicator } from "react-native";
import { HEIGHT, WIDTH } from "../constants/contants";
import { Ionicons, MaterialCommunityIcons, Entypo, AntDesign, Feather} from "@expo/vector-icons";

const HelpAndSupport = ({ navigation }) => {
  const [frequentQ, setFrequentQ] = useState([
    {
      _id: 'hwjbfwlkr',
      question: 'Hello my name is Gael how can i logout?',
      answer: 'Hello Gael please Press on HOme screen and press on account Icon then after you will seeing the logout icon and press on it'
    },
    {
      _id: 'few',
      question: 'Hello my name is Gael how can i logout?',
      answer: 'Hello Gael please Press on HOme screen and press on account Icon then after you will seeing the logout icon and press on it'
    },
    {
      _id: 'we',
      question: 'Hello my name is Gael how can i logout?',
      answer: 'Hello Gael please Press on HOme screen and press on account Icon then after you will seeing the logout icon and press on it'
    },
    {
      _id: 'hhh',
      question: 'Hello my name is Gael how can i logout?',
      answer: 'Hello Gael please Press on HOme screen and press on account Icon then after you will seeing the logout icon and press on it'
    },
    {
      _id: 'pppe',
      question: 'Hello my name is Gael how can i logout?',
      answer: 'Hello Gael please Press on HOme screen and press on account Icon then after you will seeing the logout icon and press on it'
    },
    {
      _id: 'jghgn',
      question: 'Hello my name is Gael how can i logout?',
      answer: 'Hello Gael please Press on HOme screen and press on account Icon then after you will seeing the logout icon and press on it'
    },
    {
      _id: 'ppjwhj',
      question: 'Hello my name is Gael how can i logout?',
      answer: 'Hello Gael please Press on HOme screen and press on account Icon then after you will seeing the logout icon and press on it'
    },
    {
      _id: 'ohwgvgw',
      question: 'Hello my name is Gael how can i logout?',
      answer: 'Hello Gael please Press on HOme screen and press on account Icon then after you will seeing the logout icon and press on it'
    },
  ])

  const [isLoading, setIsLoading] = useState(false)


  return (
    <View style={styles.container}>
      <View
        style={{
          height: 100,
          width: WIDTH,
          backgroundColor: "green",
          alignItems: "center",
          flexDirection: "row",
          justifyContent: "flex-start",
        }}
      >
        <Ionicons
          name="arrow-back-outline"
          style={{
            fontSize: 24,
            color: "black",
            marginLeft: 20,
            marginTop: 10,
          }}
          onPress={() => navigation.goBack()}
        />
        <View style={{ width: "80%", alignItems: "center" }}>
          <Text style={{ color: "orange", fontSize: 20, fontWeight: "bold" }}>
            {"Support Center"}
          </Text>
        </View>
      </View>

      <View style={{flex: 1}}>
        <ScrollView >

          {
            isLoading ? (
              <View style={{ alignItems: 'center', justifyContent: 'center', height: HEIGHT / 2}}>
                <ActivityIndicator size="large" color="green" />
                <Text>loading ...</Text>
              </View>
            ):
            (
              <View style={{alignItems: 'center'}}>
                <Text style={{fontSize: 20, fontWeight: 'bold', marginVertical: 10, color: 'orange'}}>Frequently Quetion</Text>
                
                {
                  frequentQ.map((item)=>{
                    return(
                      <View style={styles.questionAnswer} key={item._id}>
                        <Text style={styles.quetion}>{item.question}</Text>
                        <Text style={styles.answer}>{item.answer}</Text>
                      </View>
                    )
                  })
                }
              </View>
            )
          }
        
        </ScrollView>
      </View>
      <View style={{backgroundColor: 'green'}}>
        <Text style={{textAlign: 'center', fontSize: 16, color: 'orange', marginBottom: 20, marginTop: 10}}>for more information please contact us:</Text>
        <View>
          <View style={styles.footerItem}>
            <Feather name="phone-call" style={styles.foterIcon}/> 
            <Text style={styles.footerText}>(+250) 789 030 464</Text>
          </View>

          <View style={styles.footerItem}>
            <Entypo name="twitter" style={styles.foterIcon}/>
            <Text style={styles.footerText}>GFRMS_Rwanda</Text>
          </View>

          <View style={styles.footerItem}>
            <AntDesign name="instagram" style={styles.foterIcon}/>
            <Text style={styles.footerText}>GFRMS_Rwanda</Text>
          </View>
          <View style={styles.footerItem}>
            <MaterialCommunityIcons name="gmail" style={styles.foterIcon}/> 
            <Text style={styles.footerText}>support@gfrms.com</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  questionAnswer:{
    backgroundColor: '#fff',
    width: '90%',
    borderRadius: 10,
    paddingLeft: 20,
    paddingVertical: 10
  },
  quetion:{
    fontSize: 16,
    color: 'grey',
    marginBottom: 5
  },
  answer: {
    color: 15,
    color: 'orange'
  },
  footerItem:{
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 20,
    marginBottom: 10
  },
  foterIcon:{
    color: 'orange',
    fontSize: 24,
    marginRight: 10
  },
  footerText:{
    color: 'orange',
    fontSize: 20
  }
});

export default HelpAndSupport;
