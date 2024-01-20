import { Tabs } from "expo-router";
import { MaterialIcons } from '@expo/vector-icons'

export default function TabRoutesLayout() {
  return (
    <Tabs screenOptions={{headerShown: true}}>
      <Tabs.Screen
        name="index"
        options={{
          title: "TESTING",
          tabBarIcon: ({ size, color }) => 
            <MaterialIcons name="home" color={color} size={size}
            />
        }}
      />

      <Tabs.Screen
        name="test"
        options={{
          title: "TESTT",
          tabBarIcon: ({ size, color }) => 
            <MaterialIcons name="person" color={color} size={size}/>
        }}
      />


    </Tabs>
  )
}