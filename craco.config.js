const path = require("path");

module.exports = {
    webpack: {
        alias: {
            "@assets": path.resolve(__dirname, "./src/assets"),
            "@components": path.resolve(__dirname, "./src/components"),
            "@data": path.resolve(__dirname, "./src/data"),
            "@hooks": path.resolve(__dirname, "./src/hooks"),
            "@shared": path.resolve(__dirname, "./src/shared"),
            "@pages": path.resolve(__dirname, "./src/pages"),
            "@store": path.resolve(__dirname, "./src/store"),
        },
    },
};