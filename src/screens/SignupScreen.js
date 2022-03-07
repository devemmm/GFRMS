import React, { useState, useReducer } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ImageBackground,
  Platform,
  StatusBar,
  StyleSheet,
} from "react-native";
import { HEIGHT, WIDTH } from "../constants/contants";
import { gfrsApi } from "../api/gfrsApi";
import constants from "../libs/constants";
import ActivityIndicator from "../helpers/ActivityIndicator";

const reducer = (state, action) => {
  switch (action.type) {
    case "fname":
      return { ...state, fname: action.payload };
    case "lname":
      return { ...state, lname: action.payload };
    case "phone":
      return { ...state, phone: action.payload };
    case "email":
      return { ...state, email: action.payload };
    case "password":
      return { ...state, password: action.payload };

    default:
      return state;
  }
};

const SignupScreen = ({ navigation }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const [user, dispacth] = useReducer(reducer, {
    fname: "",
    lname: "",
    phone: "",
    email: "",
    password: "",
  });

  const handleSignup = () => {
    if (
      !user.fname ||
      !user.lname ||
      !user.phone ||
      !user.email ||
      !user.password
    ) {
      return setError("please you must fill all field ");
    }

    setIsLoading(true);
    fetch(`${gfrsApi}/users/signup`, {
      method: constants.method.POST,
      headers: constants.headers,
      body: JSON.stringify({
        ...user,
      }),
    })
      .then((response) => response.json())
      .then((res) => {
        setIsLoading(false);
        const { error, status } = res;

        if (error && status === 400) {
          setError(res.errorMessage);
          return;
        }

        navigation.navigate("Signin");
      })
      .catch((error) => {
        setIsLoading(false);
        console.log("error occupied", error.message);
      });
  };

  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../../assets/images/gfrs_bg.jpg")}
        resizeMode="cover"
        style={styles.backgroundImage}
      >
        {isLoading ? (
          <ActivityIndicator visible={true} />
        ) : (
          <ActivityIndicator visible={false} />
        )}
        <Text style={styles.title}>GfRS</Text>
        <View style={styles.form}>
          <Text style={styles.inputLabel}>First Name</Text>
          <TextInput
            style={styles.inputField}
            autoCapitalize="none"
            autoCorrect={false}
            value={user.fname}
            onChangeText={(value) =>
              dispacth({ type: "fname", payload: value })
            }
          />

          <Text style={styles.inputLabel}>Last Name</Text>
          <TextInput
            style={styles.inputField}
            autoCapitalize="none"
            autoCorrect={false}
            value={user.lname}
            onChangeText={(value) =>
              dispacth({ type: "lname", payload: value })
            }
          />

          <Text style={styles.inputLabel}>Phone</Text>
          <TextInput
            style={styles.inputField}
            autoCapitalize="none"
            autoCorrect={false}
            keyboardType="phone-pad"
            maxLength={10}
            value={user.phone}
            onChangeText={(value) =>
              dispacth({ type: "phone", payload: value })
            }
          />

          <Text style={styles.inputLabel}>Email</Text>
          <TextInput
            style={styles.inputField}
            autoCapitalize="none"
            autoCorrect={false}
            value={user.email}
            onChangeText={(value) =>
              dispacth({ type: "email", payload: value })
            }
          />

          <Text style={styles.inputLabel}>Password</Text>
          <TextInput
            style={styles.inputField}
            autoCapitalize="none"
            secureTextEntry
            autoCorrect={false}
            value={user.password}
            onChangeText={(value) =>
              dispacth({ type: "password", payload: value })
            }
          />
          {error ? (
            <Text
              style={{
                color: "red",
                textAlign: "center",
                marginTop: 20,
                fontSize: 17,
              }}
            >
              {error}
            </Text>
          ) : null}
          <TouchableOpacity
            style={styles.loginButton}
            onPress={() => {
              setError("");
              handleSignup();
            }}
          >
            <Text style={styles.loginText}>Signup</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.linkCard}>
          <Text style={styles.linkText}>Already have an account? </Text>
          <TouchableOpacity onPress={() => navigation.navigate("Signin")}>
            <Text style={styles.link}> Login instead</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: Platform.OS == "ios" ? 12 : StatusBar.currentHeight,
    backgroundColor: "green",
    flex: 1,
  },
  backgroundImage: {
    flex: 1,
    // opacity: 0.2,
    backgroundColor: "#19451a",
  },
  title: {
    textAlign: "center",
    fontSize: 30,
    fontWeight: "bold",
    textTransform: "uppercase",
    color: "#fff",
  },
  form: {
    marginTop: 20,
    marginHorizontal: WIDTH * 0.05,
  },
  inputLabel: {
    fontSize: 18,
    marginTop: 20,
    color: "#fff",
    fontWeight: "bold",
  },
  inputField: {
    borderColor: "#fff",
    borderBottomWidth: 2,
    height: HEIGHT * 0.05,
    paddingRight: 10,
    fontSize: 18,
    fontWeight: "bold",
    color: "orange",
  },
  loginButton: {
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    marginTop: HEIGHT * 0.05,
    borderRadius: 20,
    height: HEIGHT * 0.07,
  },
  loginText: {
    fontSize: 20,
    color: "black",
    fontWeight: "bold",
  },
  linkCard: {
    justifyContent: "center",
    alignItems: "flex-end",
    flexDirection: "row",
    flex: 1,
    paddingBottom: HEIGHT * 0.05,
  },
  linkText: {
    color: "#fff",
    fontSize: 16,
  },
  link: {
    color: "orange",
    fontSize: 18,
  },
});

export default SignupScreen;
