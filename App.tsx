import { StatusBar } from "expo-status-bar";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { Provider as PaperProvider } from "react-native-paper";
import { Theme } from "react-native-paper/lib/typescript/types";

import Navigation from "_navigation";
import { MaterialIcons } from "_components";
import { useAndroidNavigationBar, useCachedResources } from "_hooks/utils";
import Themes from "_styles/themes";

const paperSettings = {
    icon: MaterialIcons,
};

export default function App() {
    const theme = Themes.light;

    /** HOOKS **/
    const loaded = useCachedResources();
    useAndroidNavigationBar(theme.colors.background);

    if (!loaded) return null;

    return (
        <SafeAreaProvider>
            <PaperProvider theme={theme as Theme} settings={paperSettings}>
                <StatusBar
                    style="dark"
                    translucent={true}
                    backgroundColor="transparent"
                />

                <Navigation />
            </PaperProvider>
        </SafeAreaProvider>
    );
}
