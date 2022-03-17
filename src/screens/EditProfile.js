import React, {useContext, useReducer} from "react";
import { Text, View, StyleSheet,TextInput, ScrollView, TouchableOpacity } from "react-native";
import { WIDTH } from "../constants/contants";
import { Ionicons } from "@expo/vector-icons";
import { Context as AuthContext } from "../context/AuthContext";

const reducer = (state, action)=>{
  switch(action.type){

    case 'fname':
      return {...state, fname: action.payload}
    case 'lname':
      return {...state, lname: action.payload}
    case 'phone':
      return {...state, phone: action.payload}
    case 'password':
      return {...state, password: action.payload}
    case 'cpassword':
      return {...state, cpassword: action.payload}
    default: 
      return state
  }
}

const EditProfile = ({ navigation }) => {

  const { state } = useContext(AuthContext);
  const [{fname, lname, phone, password, cpassword}, dispatch] = useReducer(reducer, {fname: '', lname: '', phone : '', password: '', cpassword: ''})
  
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
            {"User Profile"}
          </Text>
        </View>
      </View>
        
      <ScrollView style={{width: '100%'}}>
        <View style={{alignItems: 'center', justifyContent: 'center'}}>
          <Text style={styles.sectionTitle}>Profile Service</Text>
          <View style={styles.section}>
            <TextInput 
              placeholder="Fname" 
              style={styles.textInput}
              value={fname}
              onChangeText={(value)=> dispatch({type: 'fname', payload: value})}
            />
            <TextInput 
              placeholder="Lname" 
              style={styles.textInput}
              value={lname}
              onChangeText={(value)=> dispatch({type: 'lname', payload: value})}
            />
            <TextInput 
              placeholder="Phone" 
              style={styles.textInput}
              value={phone}
              onChangeText={(value)=> dispatch({type: 'phone', payload: value})}
            />
          </View>
        
          <TouchableOpacity 
            style={[styles.update_btn, {marginBottom: 50}]}
            onPress={()=>{
              alert('Profile updated Successfull')
              navigation.goBack()
            }}
          >
            
            <Text style={[styles.update_btn_txt, {textTransform: 'uppercase'}]}>Update</Text>
          </TouchableOpacity>


          <Text style={styles.sectionTitle}>Security Service</Text>
          <View style={styles.section}>
            <TextInput
              placeholder="New Password"
              style={styles.passwordInput}
              secureTextEntry
              value={password}
              onChangeText={(value)=> dispatch({type: 'password', payload: value})}
            />
            <TextInput
              placeholder="Confirm Password"
              style={styles.passwordInput}
              secureTextEntry
              value={cpassword}
              onChangeText={(value)=> dispatch({type: 'cpassword', payload: value})}
            />
          </View>
          <TouchableOpacity 
            style={styles.update_btn}
            onPress={()=>{
                alert('Password updated Successfull')
                navigation.goBack()
              }}
            >
            <Text style={[styles.update_btn_txt, {textTransform: 'capitalize'}]}>Change Password</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#dae0e0",
    alignItems: 'center',
  },
  section:{
    backgroundColor: '#fff', 
    width: '80%', 
    borderRadius: 10, 
    marginTop: 20
  },
  sectionTitle: {
    color: 'grey', 
    fontSize: 18, 
    fontWeight: 'bold', 
    marginTop: 10
  },
  textInput: {
      height: 50,
      paddingLeft: 10,
      fontSize: 16
  },
  passwordInput:{
    height: 60,
    paddingLeft: 10,
    fontSize: 18,
  },
  update_btn:{
    backgroundColor: 'green', 
    width: '60%', 
    marginTop: 20, 
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10
  },
  update_btn_txt: {
    fontSize: 20, 
    fontWeight: 'bold', 
    color: 'orange', 
  }
});

export default EditProfile;
