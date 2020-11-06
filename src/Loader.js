import React from "react";
import { StyleSheet } from "react-native";
import { AppStyles } from "./AppStyles";
import { AsyncStorage, ActivityIndicator } from "react-native";


const Loader = () => (
        <ActivityIndicator
          style={styles.spinner}
          size="large"
          color={AppStyles.color.tint}
        />
)

const styles = StyleSheet.create({
  spinner: {
    marginTop: 200
  }
});

export default Loader;
