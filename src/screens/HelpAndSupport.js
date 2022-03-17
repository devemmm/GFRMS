import React from "react";
import { Text, View, StyleSheet } from "react-native";
import { WIDTH } from "../constants/contants";
import { Ionicons, MaterialCommunityIcons, Entypo, AntDesign, Feather} from "@expo/vector-icons";

const HelpAndSupport = ({ navigation }) => {
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

      </View>
      <View style={{backgroundColor: 'green'}}>
        <Text style={{textAlign: 'center', fontSize: 16, color: 'orange', marginBottom: 20, marginTop: 10}}>for more information please contact us:</Text>
        <View>
          <View style={styles.footerItem}>
            <Feather name="call" style={styles.foterIcon}/> 
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
