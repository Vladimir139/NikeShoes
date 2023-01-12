module.exports = {
    // ... your existing config
    settings: {
        'import/resolver': {
            alias: {
                map: [
                    // And all your import aliases
                    ['@components', './src/components'],
                    ['@assets', './src/assets'],
                ],
                extensions: ['.ts', '.js', '.jsx', '.json'],
            },
        },
    },
};

