import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { HEIGHT, WIDTH, history } from "../constants/contants";

const HistoryScreen = ({ navigation }) => {
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
      <View style={{ flex: 1 }}>
        {history.map((date, dateIndex) => {
          return (
            <View key={dateIndex.toString()}>
              <Text style={styles.dateTitle}>{date.date}</Text>
              <View key={dateIndex.toString()} style={styles.head}>
                <Text style={styles.headItem}>time</Text>
                <Text style={styles.headItem}>action</Text>
                <Text style={styles.headItem}>temperature</Text>
                <Text style={styles.headItem}>status</Text>
              </View>
              {date.payload.map((item, index) => {
                return (
                  <View key={index.toString()} style={styles.body}>
                    <Text style={styles.headItem}>{item.time}</Text>
                    <Text style={styles.headItem}>{item.action}</Text>
                    <Text style={styles.headItem}>{item.temperature}</Text>
                    <Text
                      style={
                        item.status === "success"
                          ? [
                              styles.headItem,
                              {
                                backgroundColor: "orange",
                                borderRadius: 10,
                                color: "#fff",
                                paddingHorizontal: 5,
                              },
                            ]
                          : [
                              styles.headItem,
                              {
                                backgroundColor: "red",
                                color: "#fff",
                                borderRadius: 10,
                                paddingHorizontal: 5,
                              },
                            ]
                      }
                    >
                      {item.status}
                    </Text>
                  </View>
                );
              })}
            </View>
          );
        })}
      </View>
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
