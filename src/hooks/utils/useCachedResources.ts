import { useEffect, useState } from "react";
import * as Font from "expo-font";
import * as SplashScreen from "expo-splash-screen";

export default function useCachedResources() {
    const [loaded, setLoaded] = useState(false);

    const fonts = {
        "Montserrat Regular": require("_assets/fonts/Montserrat-Regular.otf"),
        "Montserrat Medium": require("_assets/fonts/Montserrat-Medium.otf"),
        "Montserrat SemiBold": require("_assets/fonts/Montserrat-SemiBold.otf"),
        "Material Icons Outlined": require("_assets/fonts/MaterialIconsOutlined-Regular.otf"),
    };

    // Load any resources or data that we need prior to rendering the app
    useEffect(() => {
        async function loadResourcesAndDataAsync() {
            try {
                SplashScreen.preventAutoHideAsync();

                // Load fonts
                await Font.loadAsync(fonts);
            } catch (e) {
                console.warn(e);
            } finally {
                setLoaded(true);
                SplashScreen.hideAsync();
            }
        }

        loadResourcesAndDataAsync();
    }, []);

    return loaded;
}
