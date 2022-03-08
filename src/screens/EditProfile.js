import React from "react";
import { Text, View, StyleSheet } from "react-native";

const EditProfile = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text> Term anad Privacy</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "grey",
  },
});

export default EditProfile;
