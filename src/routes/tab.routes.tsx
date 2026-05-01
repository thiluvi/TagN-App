import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react";
import { Text, View } from "react-native";
import { CustomTabBar } from "../components/CustomTabBar";
import { Home } from "../pages/Home";
import { Perfil } from "../pages/Perfil";
import { Sacola } from "../pages/Sacola";
import { Favoritos } from "../pages/Favoritos";

const Tab = createBottomTabNavigator();

// Componente provisório para as abas que ainda não existem
function DummyScreen() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#ffffffff",
      }}
    >
      <Text>Em breve...</Text>
    </View>
  );
}

export function TabRoutes() {
  return (
    <Tab.Navigator
      tabBar={(props) => <CustomTabBar {...props} />}
      screenOptions={{ headerShown: false }}
    >
      <Tab.Screen name="HomeTab" component={Home} />
      <Tab.Screen name="BagTab" component={Sacola} />
      <Tab.Screen name="HeartTab" component={Favoritos} />
      <Tab.Screen name="SearchTab" component={DummyScreen} />
      <Tab.Screen name="PerfilTab" component={Perfil} />
    </Tab.Navigator>
  );
}
