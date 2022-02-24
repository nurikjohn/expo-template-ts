import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { RootStackParamList } from "_types";

import HomeScreen from "_screens/home";

const Stack = createNativeStackNavigator();

const RootNavigator = () => {
    const screenOptions = {
        headerShown: false,
        detachPreviousScreen: false,
    };
    ``;

    return (
        <Stack.Navigator screenOptions={screenOptions}>
            <Stack.Screen
                name="NotFound"
                component={HomeScreen}
                options={{ title: "Oops!" }}
            />
        </Stack.Navigator>
    );
};

const Navigation = () => {
    return (
        <NavigationContainer>
            <RootNavigator />
        </NavigationContainer>
    );
};

export default Navigation;
