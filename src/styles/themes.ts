import { DefaultTheme, configureFonts } from "react-native-paper";
import { Fonts } from "react-native-paper/lib/typescript/types";
import Colors from "./colors";
import * as Typography from "./typography";

const fonts = {
    light: {
        fontFamily: Typography.MEDIUM,
        fontWeight: Typography.FONT_WEIGHT_REGULAR,
    },
    thin: {
        fontFamily: Typography.MEDIUM,
        fontWeight: Typography.FONT_WEIGHT_REGULAR,
    },
    regular: {
        fontFamily: Typography.MEDIUM,
        fontWeight: Typography.FONT_WEIGHT_REGULAR,
    },
    medium: {
        fontFamily: Typography.MEDIUM,
        fontWeight: Typography.FONT_WEIGHT_MEDIUM,
    },
    bold: {
        fontFamily: Typography.BOLD,
        fontWeight: Typography.FONT_WEIGHT_BOLD,
    },
};

export const light = {
    ...DefaultTheme,

    mode: "adaptive",
    scheme: "light",

    roundness: 4,
    colors: {
        ...DefaultTheme.colors,
        ...Colors.light,
    },
    fonts,
};

export type Theme = typeof light;

export default { light };
