import React from "react";
import { Text, View, StyleSheet } from "react-native";
import { WIDTH } from "../constants/contants";
import constants from "../libs/constants";
import { Ionicons } from "@expo/vector-icons";

const TermAndPrivacy = ({ navigation }) => {
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
            {" Term and Privacy"}
          </Text>
        </View>
      </View>
      <View>
        <Text style={{ fontSize: 18, marginHorizontal: 15, color: 'grey' }}>
          {constants.termAndPrivacy}
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#dae0e0",
  },
});

export default TermAndPrivacy;
