import React, { useState, useEffect, useContext } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  ActivityIndicator,
  Alert,
} from "react-native";
import { HEIGHT, WIDTH } from "../constants/contants";
import { gfrsApi } from "../api/gfrsApi";
import { Ionicons } from "@expo/vector-icons";
import { Context as AuthContext } from "../context/AuthContext";

const HistoryScreen = ({ navigation }) => {
  const [history, setHistory] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [fid, setFid] = useState("623093005533f833a0561c5d");
  const [isGeneratingReport, setIsGeneratingReport] = useState(false);
  const { state } = useContext(AuthContext);

  useEffect(() => {
    const unsubscribe = navigation.addListener("focus", () => {
      setIsLoading(true);
      fetch(`${gfrsApi}/data?fid=${fid}&type=all`, {
        method: "get",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      })
        .then((response) => response.json())
        .then((res) => {
          setIsLoading(false);
          if (res.status !== 200) {
            alert("something went wrong contact system administrator");
          }
          setHistory(res.data);
        })
        .catch((error) => {
          setIsLoading(false);
          alert(`something went wrong because ${error.message}`);
        });
    });

    return unsubscribe;
  }, [navigation]);

  const handleGenerateReport = () => {
    try {
      setIsGeneratingReport(true);
      fetch(
        `${gfrsApi}/data?fid=${fid}&type=all&report=true&email=${state.user.email}`,
        {
          method: "get",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
        }
      )
        .then((response) => response.json())
        .then((res) => {
          setIsGeneratingReport(false);
          if (res.status !== 200) {
            Alert.alert(
              "error",
              "something went wrong contact system administrator"
            );
          }
          Alert.alert("success", res.data[0].message);
          navigation.goBack();
        })
        .catch((error) => {
          setIsGeneratingReport(false);
          alert(`something went wrong because ${error.message}`);
        });
    } catch (error) {
      setIsGeneratingReport(false);
      Alert.alert("faild", `something went wrong because ${error.message}`);
    }
  };

  return (
    <View style={styles.container}>
      <View
        style={{
          height: 100,
          width: WIDTH,
          backgroundColor: "green",
          alignItems: "center",
          justifyContent: "flex-start",
          flexDirection: "row",
          width: "100%",
        }}
      >
        <View
          style={{
            width: "75%",
            alignItems: "flex-end",
            paddingRight: "10%",
          }}
        >
          <Text
            style={{
              color: "#fff",
              textTransform: "uppercase",
              fontSize: 25,
              fontWeight: "bold",
            }}
          >
            History
          </Text>
        </View>

        {isGeneratingReport ? null : (
          <TouchableOpacity
            style={{
              backgroundColor: "#fff",
              width: "23%",
              flexDirection: "row",
              alignItems: "center",
              // justifyContent: "center",
              marginRight: 10,
              borderRadius: 10,
              paddingLeft: 8,
            }}
            onPress={handleGenerateReport}
          >
            <Ionicons name="document-text" size={24} color="black" />
            <Text>Report</Text>
          </TouchableOpacity>
        )}
      </View>

      {isGeneratingReport ? (
        <View
          style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
        >
          <ActivityIndicator size="large" color="green" />
          <Text>loading ...</Text>
        </View>
      ) : null}

      {isLoading ? (
        <View
          style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
        >
          <ActivityIndicator size="large" color="green" />
          <Text>loading ...</Text>
        </View>
      ) : (
        <ScrollView style={{ flex: 1 }}>
          {history.map((date, dateIndex) => {
            return (
              <View key={dateIndex.toString()}>
                <Text style={styles.dateTitle}>{date.date}</Text>
                <View key={dateIndex.toString()} style={styles.head}>
                  <Text style={styles.headItem}>Time</Text>
                  <Text style={styles.headItem}>Temperature</Text>
                  <Text style={styles.headItem}>Humidity</Text>
                  <Text style={styles.headItem}>Heater</Text>
                  <Text style={styles.headItem}>Fan</Text>
                </View>
                {date.action.map((item, index) => {
                  const time = item.createdAt.split("T")[1];

                  return (
                    <View key={index.toString()} style={styles.body}>
                      <Text style={styles.headItem}>{time}</Text>
                      <Text style={styles.headItem}>{item.temperature}</Text>
                      <Text style={styles.headItem}>{item.humidity}</Text>
                      <Text style={styles.headItem}>
                        {item.heater === 1 ? "ON" : "OFF"}
                      </Text>
                      <Text style={styles.headItem}>
                        {item.fun === 1 ? "ON" : "OFF"}
                      </Text>
                    </View>
                  );
                })}
              </View>
            );
          })}
        </ScrollView>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#dae0e0",
  },
  head: {
    backgroundColor: "green",
    flexDirection: "row",
    width: WIDTH - 20,
    alignItems: "center",
    justifyContent: "space-between",
    borderWidth: 1,
    borderColor: "green",
    borderRadius: 10,
    paddingHorizontal: 5,
  },
  body: {
    flexDirection: "row",
    width: WIDTH - 20,
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 5,
  },
  dateTitle: {
    color: "orange",
    fontSize: 20,
    textAlign: "center",
    marginTop: 30,
    marginBottom: 10,
  },
  headItem: {
    color: "black",
    fontSize: 17,
    fontWeight: "bold",
  },
});
export default HistoryScreen;
