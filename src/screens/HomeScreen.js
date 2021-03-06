import React, { useReducer, useContext, useEffect, useState } from "react";
import {
  View,
  Text,
  Platform,
  TouchableOpacity,
  StatusBar,
  StyleSheet,
} from "react-native";
import { HEIGHT, WIDTH } from "../constants/contants";
import { MaterialCommunityIcons, MaterialIcons } from "@expo/vector-icons";
import Disease from "../components/Disease";
import AtmosphareItem from "../components/AtmosphareItem";
import SwitchButton from "../components/SwitchButton";
import Clock from "../components/Clock";
import { Context as AuthContext } from "../context/AuthContext";
import { gfrsApi } from "../api/gfrsApi";

const reducer = (state, action) => {
  switch (action.type) {
    case "temperature":
      return { ...state, temperature: action.payload.temperature };
    case "humidity":
      return { ...state, humidity: action.payload.humidity };
    case "fun":
      return { ...state, fun: action.payload.fun, both: "OFF", heater: "OFF" };
    case "both":
      return { ...state, both: action.payload.both, fun: "OFF", heater: "OFF" };
    case "heater":
      return {
        ...state,
        heater: action.payload.heater,
        fun: "OFF",
        both: "OFF",
      };
    case "funHeater":
      return {
        ...state,
        fun: action.payload.fun,
        heater: action.payload.heater,
      };
    default:
      return state;
  }
};

const HomeScreen = ({ navigation }) => {

  const [
    { temperature, humidity, windSpeed, rainfall, fun, both, heater },
    dispatch,
  ] = useReducer(reducer, {
    temperature: 0,
    humidity: 0,
    rainfall: 0,
    windSpeed: 3.9,
    fun: "OFF",
    both: "OFF",
    heater: "OFF",
  });

  const { state } = useContext(AuthContext);
  const user = state.user;
  const [automatic, setAutomatic] = useState(false)
  useEffect(() => {
    const interval = setInterval(() => {
      let fid = "623093005533f833a0561c5d";
      let type = "last";

      const url = `${gfrsApi}/data?fid=${fid}&type=${type}`;

      fetch(url, {
        method: "get",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      })
        .then((response) => response.json())
        .then((res) => {
          dispatch({
            type: "funHeater",
            payload: {
              fun: res.data.fun == 0 ? "OFF" : "ON",
              heater: res.data.heater == 0 ? "OFF" : "ON",
            },
          });
          dispatch({
            type: "temperature",
            payload: { temperature: res.data.temperature },
          });
          dispatch({
            type: "humidity",
            payload: { humidity: res.data.humidity },
          });

          if (res.data.temperature < 18 && res.data.heater === 0) {
            alert("Temperature is too low please turn on heater")
          }

          if (res.data.temperature > 29 && res.data.fun === 0) {
            alert("Temperature is too hight please turn on fun")
          }

          // if (automatic === true) {
          //   console.log("automatic")
          //   if (
          //     res.data.temperature < 18 &&
          //     res.data.heater === 0 &&
          //     res.data.humidity !== 0
          //   ) {
          //     console.log(humidity);
          //     notifyElectonics({
          //       fun,
          //       heater,
          //       temperature: res.data.temperature,
          //       humidity: res.data.humidity,
          //       type: "Heater",
          //     });
          //   }

          //   if (
          //     res.data.temperature > 29 &&
          //     res.data.fun === 0 &&
          //     res.data.humidity !== 0
          //   ) {
          //     notifyElectonics({
          //       fun,
          //       heater,
          //       temperature: res.data.temperature,
          //       humidity: res.data.humidity,
          //       type: "Fun",
          //     });
          //   }
          // }
        })
        .catch((error) => {
          alert(`something went wrong because ${error.message}`);
        });
    }, 3000);

    return () => clearInterval(interval);
  }, [temperature]);

  const notifyElectonics = (
    { fun, heater, temperature, humidity, type },
    callBack
  ) => {
    const CASETYPE = ["ON", "OFF"];
    let h = 0,
      f = 0;
    switch (type) {
      case "Heater":
        f = 0;
        heater === CASETYPE[0] ? (h = 0) : (h = 1);
        break;

      case "Fun":
        h = 0;
        fun === CASETYPE[0] ? (f = 0) : (f = 1);
        break;

      case "Both":
        h = 0;
        f = 0;
        break;
      default:
        h = 0;
        f = 0;
        break;
    }
    const url2 = `${gfrsApi}/users/notify/623093005533f833a0561c5d?heater=${h}&fun=${f}&temperature=${temperature}&humidity=${humidity}`;
    fetch(url2, {
      method: "get",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((res) => {
        if (res.status === 400) {
          alert(`something went wrong, ${res.errorMessage}`);
        } else {
          alert(`Instruction setted Successfully !!!`);
          callBack ? callBack() : null;
        }
      })
      .catch((error) => {
        alert(`something went wrong because ${error.message}`);
      });
  };

  const handleButtonPress = ({ type, action }) => {
    let isOn;
    switch (type) {
      case "Fun":
        isOn = fun === "ON";
        return notifyElectonics(
          { fun, heater, temperature, humidity, type },
          () => dispatch({ type: "fun", payload: { fun: isOn ? "OFF" : "ON" } })
        );

      case "Both":
        isOn = both === "ON";
        return notifyElectonics(
          { fun, heater, temperature, humidity, type },
          () =>
            dispatch({ type: "both", payload: { both: isOn ? "OFF" : "ON" } })
        );

      case "Heater":
        isOn = heater === "ON";
        return notifyElectonics(
          { fun, heater, temperature, humidity, type },
          () =>
            dispatch({
              type: "heater",
              payload: { heater: isOn ? "OFF" : "ON" },
            })
        );

      default:
        return;
    }
  };
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.greetings}>
          <Text style={{ color: "#fff", fontSize: 20, fontWeight: "bold" }}>
            Hello, {user.fname}
          </Text>
          <Text style={{ color: "#fff", fontSize: 25 }}>Have nice day!</Text>
        </View>

        <TouchableOpacity
          style={styles.historyButton}
          onPress={() => navigation.navigate("History")}
        >
          <MaterialCommunityIcons
            name="material-design"
            size={20}
            color="#fff"
          />
          <Text style={{ color: "#fff" }}> History</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.humudityBord}>
        <View style={{ flexDirection: "row", justifyContent: "space-around" }}>
          <AtmosphareItem
            icon="temperature-low"
            color="green"
            degree={temperature}
            dtype="F"
            name="Temperature"
          />
          <AtmosphareItem
            icon=""
            color="#537ec9"
            degree={humidity}
            dtype="%"
            name="Humidity"
          />
        </View>
        {/* <View style={{ flexDirection: "row", justifyContent: "space-around" }}>
          <AtmosphareItem
            icon="cloud-moon-rain"
            color="#8e53c9"
            degree={rainfall}
            dtype="mm"
            name="Rainfall"
          />
          <AtmosphareItem
            icon=""
            color="#c9c953"
            degree={windSpeed}
            dtype="m/s"
            name="windSpeed"
          />
        </View> */}
      </View>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "flex-start",
          width: "90%",
          marginBottom: 20,
        }}
      >
        <SwitchButton
          title="Heater"
          action={heater}
          triger={handleButtonPress}
        />
        <SwitchButton title="Both" action={both} triger={handleButtonPress} />
        <SwitchButton title="Fun" action={fun} triger={handleButtonPress} />
      </View>

      <View style={{ flexDirection: 'row', alignItems: 'center' }}>

        <View style={{ height: 20, width: WIDTH / 3 }}></View>
        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
          <Clock />
          {/* <MaterialIcons name="wb-auto" style={{ fontSize: 40, color: automatic ? "green" : "red", marginLeft: 20 }} onPress={() => setAutomatic(!automatic)} /> */}
        </View>

      </View>
      <View style={{ justifyContent: "flex-end", flex: 1 }}>
        <Disease />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#dae0e0",
  },
  header: {
    paddingTop: Platform.OS === "ios" ? 12 : StatusBar.currentHeight,
    height: HEIGHT * 0.3,
    width: WIDTH,
    backgroundColor: "green",
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "space-between",
  },
  greetings: {
    marginLeft: 20,
    paddingTop: 15,
  },
  historyButton: {
    marginRight: 20,
    flexDirection: "row",
    marginTop: HEIGHT * 0.05,
    backgroundColor: "#056621",
    height: 35,
    width: 110,
    borderRadius: 35,
    justifyContent: "center",
    alignItems: "center",
  },
  humudityBord: {
    backgroundColor: "#fff",
    height: 200,
    width: WIDTH - 40,
    marginTop: -100,
    marginLeft: 20,
    marginBottom: 20,
    borderRadius: 10,
    justifyContent: "space-evenly",
  },
  buttonCard: {
    backgroundColor: "green",
    height: HEIGHT * 0.09,
    width: WIDTH - 40,
    marginLeft: 20,
    marginBottom: 20,
    borderRadius: 10,
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  diseasesCard: {
    flexDirection: "row",
    alignItems: "flex-end",
    justifyContent: "space-between",
    flex: 1,
    marginBottom: 10,
  },
});
export default HomeScreen;
