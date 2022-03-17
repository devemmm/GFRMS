import React, { useContext, useReducer } from "react";
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { WIDTH } from "../constants/contants";
import { Ionicons } from "@expo/vector-icons";
import { Context as AuthContext } from "../context/AuthContext";
import { gfrsApi } from "../api/gfrsApi";

const reducer = (state, action) => {
  switch (action.type) {
    case "fname":
      return { ...state, fname: action.payload };
    case "lname":
      return { ...state, lname: action.payload };
    case "phone":
      return { ...state, phone: action.payload };
    case "oldPassword":
      return { ...state, oldPassword: action.payload };
    case "password":
      return { ...state, password: action.payload };
    case "cpassword":
      return { ...state, cpassword: action.payload };
    default:
      return state;
  }
};

const EditProfile = ({ navigation }) => {
  const { state, signout } = useContext(AuthContext);
  const user = state.user;
  const [{ fname, lname, phone, oldPassword, password, cpassword }, dispatch] =
    useReducer(reducer, {
      fname: user.fname,
      lname: user.lname,
      phone: user.phone,
      oldPassword: "",
      password: "",
      cpassword: "",
    });

  const handleChangeProfile = () => {
    if (phone.length !== 10) {
      return alert(
        "wrong input for phone number, phone number must be 10 in length"
      );
    }

    if (fname.length < 1) {
      return alert("please first name must be specified");
    }

    if (lname.length < 1) {
      return alert("please last name must be specified");
    }

    fetch(`${gfrsApi}/users/update/profile`, {
      method: "post",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: `Bearer ${user.token}`,
      },
      body: JSON.stringify({
        fname,
        lname,
        phone,
      }),
    })
      .then((response) => response.json())
      .then((res) => {
        const { status, error, errorMessage } = res;
        if (status === 400 && error === true && errorMessage) {
          return alert(errorMessage);
        }
        dispatch({ type: "fname", payload: "" });
        dispatch({ type: "lname", payload: "" });
        dispatch({ type: "phone", payload: "" });
        alert("user profile updated Successfull!!!");

        signout({ navigation });
      })
      .catch((error) => {
        alert(error.message);
      });
  };

  const handleUpdatePassword = () => {
    if (!oldPassword) {
      return alert("please old must must be required");
    }
    if (password.length < 6 || oldPassword < 6) {
      return alert(
        "please password shold be strong this meas that password should be greater than 6 in length"
      );
    }
    if (password !== cpassword) {
      return alert("both New password and confirm password must be the same");
    }

    fetch(`${gfrsApi}/users/update/password`, {
      method: "post",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: `Bearer ${user.token}`,
      },
      body: JSON.stringify({
        oldPassword,
        password,
      }),
    })
      .then((response) => response.json())
      .then((res) => {
        const { status, error, errorMessage } = res;
        if (status === 400 && error === true && errorMessage) {
          return alert(errorMessage);
        }
        dispatch({ type: "oldPassword", payload: "" });
        dispatch({ type: "password", payload: "" });
        dispatch({ type: "cpassword", payload: "" });
        alert("Password updated Successfull!!!");
        navigation.goBack();
      })
      .catch((error) => {
        alert(error.message);
      });
  };
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

      <ScrollView style={{ width: "100%" }}>
        <View style={{ alignItems: "center", justifyContent: "center" }}>
          <Text style={styles.sectionTitle}>Profile Service</Text>
          <View style={styles.section}>
            <TextInput
              placeholder="Fname"
              style={styles.textInput}
              value={fname}
              onChangeText={(value) =>
                dispatch({ type: "fname", payload: value })
              }
              autoCapitalize="none"
            />
            <TextInput
              placeholder="Lname"
              style={styles.textInput}
              value={lname}
              onChangeText={(value) =>
                dispatch({ type: "lname", payload: value })
              }
              autoCapitalize="none"
            />
            <TextInput
              placeholder="Phone"
              style={styles.textInput}
              value={phone}
              onChangeText={(value) =>
                dispatch({ type: "phone", payload: value })
              }
              keyboardAppearance="dark"
              keyboardType="number-pad"
              autoCapitalize="none"
            />
          </View>

          <TouchableOpacity
            style={[styles.update_btn, { marginBottom: 50 }]}
            onPress={handleChangeProfile}
          >
            <Text
              style={[styles.update_btn_txt, { textTransform: "uppercase" }]}
            >
              Update
            </Text>
          </TouchableOpacity>

          <Text style={styles.sectionTitle}>Security Service</Text>
          <View style={styles.section}>
            <TextInput
              placeholder="Old Password"
              style={styles.passwordInput}
              secureTextEntry
              value={oldPassword}
              autoCapitalize="none"
              onChangeText={(value) =>
                dispatch({ type: "oldPassword", payload: value })
              }
            />
            <TextInput
              placeholder="New Password"
              style={styles.passwordInput}
              secureTextEntry
              value={password}
              autoCapitalize="none"
              onChangeText={(value) =>
                dispatch({ type: "password", payload: value })
              }
            />
            <TextInput
              placeholder="Confirm Password"
              style={styles.passwordInput}
              secureTextEntry
              value={cpassword}
              autoCapitalize="none"
              onChangeText={(value) =>
                dispatch({ type: "cpassword", payload: value })
              }
            />
          </View>
          <TouchableOpacity
            style={styles.update_btn}
            onPress={handleUpdatePassword}
          >
            <Text
              style={[styles.update_btn_txt, { textTransform: "capitalize" }]}
            >
              Change Password
            </Text>
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
    alignItems: "center",
  },
  section: {
    backgroundColor: "#fff",
    width: "80%",
    borderRadius: 10,
    marginTop: 20,
  },
  sectionTitle: {
    color: "grey",
    fontSize: 18,
    fontWeight: "bold",
    marginTop: 10,
  },
  textInput: {
    height: 50,
    paddingLeft: 10,
    fontSize: 16,
  },
  passwordInput: {
    height: 60,
    paddingLeft: 10,
    fontSize: 18,
  },
  update_btn: {
    backgroundColor: "green",
    width: "60%",
    marginTop: 20,
    height: 40,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
  },
  update_btn_txt: {
    fontSize: 20,
    fontWeight: "bold",
    color: "orange",
  },
});

export default EditProfile;
