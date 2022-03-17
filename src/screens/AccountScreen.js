import React, { useContext } from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import { Context as AuthContext } from "../context/AuthContext";
import { HEIGHT, WIDTH } from "../constants/contants";
import {
  Ionicons,
  AntDesign,
  MaterialCommunityIcons,
  Entypo,
} from "@expo/vector-icons";

const AccountScreen = ({ navigation }) => {
  const { state } = useContext(AuthContext);
  // console.log(state)

  return (
    <View style={styles.container}>
      <View
        style={{
          width: WIDTH,
          backgroundColor: "green",
          marginTop: 60,
          alignItems: "center",
        }}
      >
        <View style={{ width: "80%", marginBottom: 20 }}>
          <Ionicons
            onPress={() => navigation.navigate("Home")}
            name="arrow-back"
            style={{ color: "#fff", fontSize: 24, marginVertical: 15 }}
          />
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <View>
              <Text style={{ fontSize: 20, fontWeight: "bold" }}>
                Emm devemm
              </Text>
              <Text
                style={{
                  color: "#c7c3b9",
                  fontWeight: "bold",
                  fontSize: 18,
                  paddingVertical: 5,
                }}
              >
                myid@google.com
              </Text>
              <Text style={{ color: "orange", fontSize: 16 }}>
                +250788596281
              </Text>
            </View>
            <View>
              <Image
                style={{ height: 100, width: 100 }}
                source={{
                  uri: "https://reactnative.dev/img/tiny_logo.png",
                }}
              />
            </View>
          </View>
        </View>
      </View>
      <View
        style={{
          flex: 1,
          alignItems: "center",
          marginTop: 10,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <TouchableOpacity 
          style={styles.itemIcon}
          onPress= {()=> navigation.navigate('EditProfile')}
        >
          <MaterialCommunityIcons
            name="account"
            style={{ color: "orange", fontSize: 40 }}
          />
          <View style={{ justifyContent: "flex-start" }}>
            <Text style={styles.itemText}>Edit Account</Text>
            <Text style={[styles.itemText, styles.subItemText]}>
              update account here
            </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.itemIcon}
          onPress={() => navigation.navigate("TermAndPrivacy")}
        >
          <AntDesign name="profile" style={{ color: "orange", fontSize: 40 }} />
          <View style={{ justifyContent: "flex-start" }}>
            <Text style={styles.itemText}>Term & Privacy</Text>
            <Text style={[styles.itemText, styles.subItemText]}>
              know more about us
            </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity 
          style={styles.itemIcon}
          onPress={()=>navigation.navigate('HelpAndSupport')}
          >
          <Entypo
            name="help-with-circle"
            style={{ color: "orange", fontSize: 40 }}
          />
          <View style={{ justifyContent: "flex-start" }}>
            <Text style={styles.itemText}>Help & support</Text>
            <Text style={[styles.itemText, styles.subItemText]}>
              we are here for you
            </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.itemIcon}>
          <AntDesign
            name="setting"
            style={{
              color: "red",
              fontSize: 40,
              backgroundColor: "orange",
              color: "red",
              padding: 10,
              borderRadius: 10,
            }}
          />
          <Text style={styles.itemText}>Signout</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#dae0e0",
  },
  itemIcon: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    width: WIDTH - 40,
    paddingVertical: 15,
  },
  itemText: {
    color: "black",
    marginLeft: 20,
    fontSize: 20,
    fontWeight: "bold",
  },
  subItemText: { color: "grey", fontSize: 16, fontWeight: "normal" },
});
export default AccountScreen;
