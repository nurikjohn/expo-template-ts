import { ColorValue } from "react-native";
import { createIconSet } from "@expo/vector-icons";

import MaterialIconsGlyphMap from "./glyphmap";

export interface IconProps {
    leftIcon?: keyof typeof MaterialIcons.glyphMap;
    color?: ColorValue;
}

const MaterialIcons = createIconSet(
    MaterialIconsGlyphMap,
    "Material Icons Outlined",
    "MaterialIconsOutlined-Regular.otf"
);

export default (props: IconProps) => <MaterialIcons {...props} />;
