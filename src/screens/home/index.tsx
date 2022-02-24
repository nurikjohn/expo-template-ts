import { View } from "react-native";
import { Text } from "react-native-paper";

import { useStyle } from "_hooks/utils";

import createStyle from "./style";

const Home = () => {
    const styles = useStyle(createStyle);

    return (
        <View style={styles.screen}>
            <Text
                style={styles.text}
                onPressIn={undefined}
                onPressOut={undefined}
                android_hyphenationFrequency={undefined}
            >
                Hello World
            </Text>
        </View>
    );
};

export default Home;
