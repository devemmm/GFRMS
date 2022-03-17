import React, { useEffect, useState } from "react";
import { FlatList } from "react-native";
import { View, Text, StyleSheet } from "react-native";
import DiseaseDetails from "./DiseaseDetails";
import { gfrsApi } from "../api/gfrsApi";

const Disease = () => {
  const [diseases, setDiseases] = useState([]);
  useEffect(() => {
    fetch(`${gfrsApi}/disease`, {
      method: "get",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((res) => {
        setDiseases(res.data.diseases);
      })
      .catch((error) => {
        alert(error.message);
      });
  }, []);
  return (
    <View style={{ marginLeft: 20 }}>
      <Text style={styles.title}>Trending Diseases</Text>
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={diseases}
        keyExtractor={(disease) => disease.name}
        renderItem={({ item }) => {
          return (
            <View>
              <DiseaseDetails item={item} />
            </View>
          );
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
    textAlign: "center",
    textTransform: "uppercase",
    color: "green",
  },
});

export default Disease;
