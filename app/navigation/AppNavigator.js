import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";

import AudioList from "../screens/AudioList";
import Player from "../screens/Player";
import { MaterialIcons, FontAwesome5 } from "@expo/vector-icons";

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const AppNavigator = () => {
	return (
		<Tab.Navigator>
			<Tab.Screen
				name="AudioList"
				component={AudioList}
				options={{
					tabBarIcon: ({ color, size }) => (
						<MaterialIcons name="headset" size={size} color={color} />
					),
				}}
			/>
			<Tab.Screen
				name="Player"
				component={Player}
				options={{
					tabBarIcon: ({ color, size }) => (
						<FontAwesome5 name="compact-disc" size={size} color={color} />
					),
				}}
			/>
		</Tab.Navigator>
	);
};

export default AppNavigator;
