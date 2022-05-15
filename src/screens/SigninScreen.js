import React, { useState, useContext } from "react";
import {
  View,
  TextInput,
  TouchableOpacity,
  ImageBackground,
  Text,
  ActivityIndicator,
  Platform,
  StatusBar,
  StyleSheet,
} from "react-native";
import { Context as AuthContext } from "../context/AuthContext";
import { HEIGHT } from "../constants/contants";

const SigninScreenn = ({ navigation }) => {
  const { state, signin, throwError, clearErrorMessage } =
    useContext(AuthContext);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const isLoading = true;

  React.useEffect(() => {
    return navigation.addListener("focus", clearErrorMessage);
  }, [navigation]);

  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../../assets/images/gfrs_bg.jpg")}
        resizeMode="cover"
        style={styles.backgroundImage}
      >
        <View style={{ flex: 1 }}>
          <View style={styles.titleCard}>
            <Text style={styles.title1}>Welcome to</Text>
            <Text style={styles.title2}>gfrs System</Text>
          </View>
          <View style={styles.loginForm}>
            <Text style={styles.label}>Email</Text>
            <TextInput
              autoCapitalize="none"
              autoCorrect={false}
              style={styles.inputField}
              value={email}
              onChangeText={(input) => {
                clearErrorMessage();
                setEmail(input);
              }}
            />

            <Text style={styles.label}>Password</Text>
            <TextInput
              autoCapitalize="none"
              autoCorrect={false}
              style={styles.inputField}
              value={password}
              onChangeText={(input) => {
                clearErrorMessage();
                setPassword(input);
              }}
              secureTextEntry
            />

            {/*     ---------------------------END OF FORM --------------------------- */}
            {state.errorMessage ? (
              <Text style={styles.errorMessage}>{state.errorMessage}</Text>
            ) : null}

            {state.isLoading ? (
              <ActivityIndicator size="large" color="#00ff00" />
            ) : null}

            <TouchableOpacity
              style={styles.loginButton}
              onPress={() => {
                if (email.length < 8) {
                  throwError("wrong email");
                } else if (state.errorMessage) {
                  return null;
                } else {
                  setEmail("");
                  setPassword("");
                  signin({ email, password }, () =>
                    navigation.navigate("MainFlow")
                  );
                }
              }}
            >
              <Text style={styles.loginButtonText}>Login</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.linkCard}>
            <Text style={styles.linkText}>Don't have an account? </Text>
            <TouchableOpacity onPress={() => navigation.navigate("Signup")}>
              <Text style={styles.link}> Register Now</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: Platform.OS == "ios" ? 12 : StatusBar.currentHeight,
    flex: 1,
    backgroundColor: "green",
  },
  backgroundImage: {
    flex: 1,
    // opacity: 0.2,
    backgroundColor: "#19451a",
  },
  titleCard: {
    flex: 4,
    // borderColor: 'red',
    // borderWidth: 1,
    alignItems: "center",
    paddingTop: HEIGHT * 0.08,
  },
  title1: {
    color: "#fff",
    fontSize: 20,
    marginBottom: 20,
  },
  title2: {
    textTransform: "uppercase",
    color: "#fff",
    fontWeight: "bold",
    fontSize: 40,
  },
  loginForm: {
    // borderColor: 'red',
    // borderWidth: 2,
    flex: 6,
    marginHorizontal: 20,
  },
  label: {
    fontSize: 20,
    color: "#fff",
    fontWeight: "bold",
  },
  inputField: {
    borderBottomWidth: 2,
    borderColor: "grey",
    marginBottom: 20,
    fontSize: 20,
    color: "orange",
  },
  loginButton: {
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 20,
    height: HEIGHT * 0.07,
  },
  loginButtonText: {
    color: "black",
    fontWeight: "bold",
    fontSize: 20,
  },
  errorMessage: {
    color: "red",
    textAlign: "center",
    marginBottom: 10,
    fontSize: 16,
  },
  linkCard: {
    justifyContent: "center",
    alignItems: "flex-end",
    flexDirection: "row",
    flex: 1,
    marginBottom: HEIGHT * 0.05,
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

export default SigninScreenn;
