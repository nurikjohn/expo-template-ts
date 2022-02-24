import { useEffect } from "react";
import { ColorValue, Platform } from "react-native";
import * as NavigationBar from "expo-navigation-bar";

const useAndroidNavigationBar = (color: ColorValue = "white") => {
    const changeNavigationBarColor = (color: ColorValue) => {
        if (Platform.OS == "android") {
            NavigationBar.setBackgroundColorAsync(color);
        }
    };
    useEffect(() => {
        changeNavigationBarColor(color);
    }, [color]);

    return {
        changeNavigationBarColor,
    };
};

export default useAndroidNavigationBar;
