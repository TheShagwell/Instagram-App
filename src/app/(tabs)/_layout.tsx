import { Redirect, Tabs } from "expo-router";
import { FontAwesome } from "@expo/vector-icons";
import { useAuth } from "~/src/providers/AuthProviders";

export default function TabsLayout() {

  const { isAuthenticated } = useAuth();

    if (!isAuthenticated) {
        return <Redirect href="/(auth)" />
    }

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
