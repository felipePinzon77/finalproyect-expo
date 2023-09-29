import React from "react";
import { StyleSheet, View } from "react-native";
import { BottomNavigation, BottomNavigationItem } from "@expo/react-native-bottom-navigation";

const bottomnavigation = () => {
  return (
    <View style={styles.container}>
      <BottomNavigation>
        <BottomNavigationItem
          title="Inicio"
          icon={require("./assets/icons/home.svg")}
        />
        <BottomNavigationItem
          title="Perfil"
          icon={require("./assets/icons/profile.svg")}
        />
        <BottomNavigationItem
          title="Configuración"
          icon={require("./assets/icons/settings.svg")}
        />
      </BottomNavigation>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default bottomnavigation;