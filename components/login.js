import React, { useState } from "react";
import {
  Button,
  TextInput,
  View,
} from "react-native";
import Expo from "expo";

const LoginScreen = ({ navigation }) => {
  const [username, setUsername] = useState("");

  const handleLogin = () => {
    navigation.navigate("BottomTabNavigator");
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Nombre de usuario"
        onChangeText={(text) => setUsername(text)}
        value={username}
      />
      <Button title="Iniciar sesión" onPress={handleLogin} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    backgroundColor: "black",
  },
  input: {
    flex: 1,
    paddingHorizontal: 10,
    paddingVertical: 8,
    fontSize: 16,
  },
  button: {
    backgroundColor: "white",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 20,
    marginBottom: 15,
    marginTop: 20,
  },
  buttonText: {
    color: "black",
    fontSize: 16,
    textAlign: "center",
  },
});

export default LoginScreen;
