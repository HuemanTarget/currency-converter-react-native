import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
} from "react-native";

const currencyPerDollar = {
  EURO: 0.89,
  POUND: 0.81,
  RUBLE: 69.13,
  BITCOIN: 0.00011,
  YEN: 107.2,
  DINAR: 1190.0,
  RUPEE: 75.56,
  SHEKEL: 3.44,
  AUSDOLLAR: 1.45,
  CANDOLLAR: 1.36,
};

export default function App() {
  const [inputValue, setInputValue] = useState(20);
  const [resultValue, setResultValue] = useState(0.0);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.screenview}>
        <View style={styles.resultcontainer}>
          <Text style={styles.results}>{resultValue}</Text>
        </View>
        <View style={styles.inputcontainer}>
          <TextInput
            style={styles.input}
            selectionColor="white"
            keyboardType="numeric"
            placeholder="Enter Value"
            value={inputValue}
            onChangeText={(inputValue) => setInputValue(inputValue)}
          />
        </View>
        <View style={styles.converterbuttoncontainer}>
          <TouchableOpacity style={styles.converterbutton}>
            <Text style={styles.converterbuttontext}>$</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#8395A7",
  },
  screenview: {
    flex: 1,
  },
  resultcontainer: {
    height: 70,
    marginTop: 20,
    justifyContent: "center",
    alignItems: "center",
    borderColor: "#c1c1c1",
    backgroundColor: "#0A79DE",
    borderWidth: 2,
  },
  results: {
    fontSize: 30,
    fontWeight: "bold",
    color: "white",
  },
  inputcontainer: {
    height: 70,
    marginTop: 10,
    justifyContent: "center",
    alignItems: "center",
    borderColor: "#c1c1c1",
    borderWidth: 2,
    backgroundColor: "#0A79DE",
  },
  input: {
    color: "white",
    fontSize: 30,
  },
  converterbuttoncontainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    marginTop: 20,
    borderColor: "#c1c1c1",
    borderWidth: 2,
  },
  converterbutton: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#0A79DF",
    height: 100,
    borderColor: "#c1c1c1",
    borderWidth: 2,
    width: "33.3%",
  },
  converterbuttontext: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
  },
});
