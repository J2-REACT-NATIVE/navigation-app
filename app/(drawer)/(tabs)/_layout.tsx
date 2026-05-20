// import {Ionicons} from '@expo/vector-icons/FontAwesome';
import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { Tabs } from "expo-router";

const _layout = () => {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: "green",
        tabBarShowLabel: true,
        //headerShown: false,
        tabBarStyle : {
          backgroundColor:'black'
        },
        tabBarActiveBackgroundColor:'blue'
      }}
      //initialRouteName="home/index"
    >
      
      
      <Tabs.Screen
        name="home/index"
        options={{
          title: "Home Screen",
          tabBarIcon: ({ color }) => (
            <Ionicons size={28} name="home-outline" color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="favorites/index"
        options={{
          title: "Favorites Screen",
          tabBarIcon: ({ color }) => (
            <Ionicons size={28} name="star-outline" color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="(stack)"
        options={{
          title: "Stack",
          headerShown: false,
          tabBarIcon: ({ color }) => (
            <Ionicons size={28} name="person-add-outline" color={color} />
          ),
        }}
      />
      
    </Tabs>
  );
};

export default _layout;
