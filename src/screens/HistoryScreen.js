import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  ActivityIndicator,
} from "react-native";
import { HEIGHT, WIDTH } from "../constants/contants";
import { gfrsApi } from "../api/gfrsApi";

const HistoryScreen = ({ navigation }) => {
  const [history, setHistory] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    const fid = "623093005533f833a0561c5d";
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
  return (
    <View style={styles.container}>
      <View
        style={{
          height: 100,
          width: WIDTH,
          backgroundColor: "green",
          alignItems: "center",
          justifyContent: "center",
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
