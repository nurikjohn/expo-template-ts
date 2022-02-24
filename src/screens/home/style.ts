import { CreateStyle, StyleProps } from "_hooks/utils/useStyle";

const createStyle: CreateStyle = (theme) => {
    const style = {
        screen: {
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: theme.colors.background,
        },
        text: {
            marginBottom: 24,
        },
    };

    return style as StyleProps<typeof style>;
};

export default createStyle;
