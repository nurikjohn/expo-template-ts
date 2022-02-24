module.exports = function (api) {
    api.cache(true);
    return {
        presets: ["babel-preset-expo"],
        plugins: [
            [
                "module-resolver",
                {
                    alias: {
                        _assets: "./src/assets",
                        _components: "./src/components",
                        _navigation: "./src/navigation",
                        _screens: "./src/screens",
                        _styles: "./src/styles",
                        _utils: "./src/utils",
                        _hooks: "./src/hooks",
                        _types: "./types.tsx",
                    },
                },
            ],
        ],
        env: {
            production: {
                plugins: ["react-native-paper/babel"],
            },
        },
    };
};
