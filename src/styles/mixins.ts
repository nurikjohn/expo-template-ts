import { Dimensions, PixelRatio } from "react-native";
import Constants from "expo-constants";

const WINDOW_WIDTH = Dimensions.get("window").width;
const WINDOW_HEIGHT = Dimensions.get("window").height;

const SCREEN_WIDTH = Dimensions.get("screen").width;
const SCREEN_HEIGHT = Dimensions.get("screen").height;

const dimensions = {
    window: {
        height: WINDOW_HEIGHT,
        width: WINDOW_WIDTH,
    },
    screen: {
        height: SCREEN_HEIGHT,
        width: SCREEN_WIDTH,
    },
};

export const statusbar = Constants.statusBarHeight;

export const width = (scale = 1, type = "width") =>
    // @ts-ignore
    dimensions[type].width * scale;

export const height = (scale = 1, type = "window") =>
    // @ts-ignore
    dimensions[type].height * scale;

export const ratio = (value: number, ratio: number, type = "window") => [
    value,
    value * ratio,
];

export const scaleFont = (size: number) => size * PixelRatio.getFontScale();

export const alpha = (hex: string, percent: number) => {
    return `${hex}${Math.round((255 / 100) * percent).toString(16)}`;
};
