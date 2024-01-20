import { Tabs } from "expo-router";
import { MaterialIcons } from '@expo/vector-icons'

export default function TabRoutesLayout() {
  return (
    <Tabs screenOptions={{headerShown: false}}>
      <Tabs.Screen
        name="index"
        options={{
          title: "Profile",
          tabBarIcon: ({ size, color }) => 
            <MaterialIcons name="person" color={color} size={size}/>
        }}
      />

    </Tabs>
  )
}