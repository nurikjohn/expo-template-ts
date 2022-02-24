import { useMemo } from "react";
import { StyleSheet } from "react-native";
import { useTheme } from "react-native-paper";
import { Theme } from "_styles/themes";

export type CreateStyle = (theme: Theme) => any;

export type StyleProps<T> =
    | StyleSheet.NamedStyles<T>
    | StyleSheet.NamedStyles<StyleSheet.NamedStyles<T>>;

const useStyle = (createStyle: CreateStyle) => {
    const theme = useTheme() as Theme;

    return useMemo(() => {
        const style = createStyle(theme);

        return StyleSheet.create(style);
    }, [theme]);
};

export default useStyle;
