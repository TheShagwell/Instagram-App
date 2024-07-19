import { Tabs } from "expo-router";
import { FontAwesome } from "@expo/vector-icons";

export default function TabsLayout() {
  return (
    <Tabs
      screenOptions={{ 
        tabBarActiveTintColor: "black", 
        tabBarShowLabel: false,  
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          headerTitle: "Go Nigeria",
          headerTitleAlign: 'center',
          tabBarIcon: ({ color }) => (
            <FontAwesome name="home" size={28} color={color} />
          ),
        }}
      />

      <Tabs.Screen
        name="new"
        options={{
          headerTitle: "Create post",
          headerTitleAlign: 'center',
          tabBarIcon: ({ color }) => (
            <FontAwesome name="plus-square-o" size={28} color={color} />
          ),
        }}
      />

      <Tabs.Screen
        name="profile"
        options={{
          headerTitle: "Profile",
          headerTitleAlign: 'center',
          tabBarIcon: ({ color }) => (
            <FontAwesome name="user" size={28} color={color} />
          ),
        }}
      />

    </Tabs>
  );
}
