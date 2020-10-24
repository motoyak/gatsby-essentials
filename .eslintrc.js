const path = require("path");
module.exports = {
  "rules": {
    "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx"] }],
    "react/prop-types": "off",
    "indent": [
      2, 2, {"SwitchCase": 1}
    ],
    // "quotes": [
    //   2,
    //   "single"
    // ],
    "linebreak-style": [
      2,
      "unix"
    ],
    // "semi": [
    //   2,
    //   "always"
    // ],
    "no-console": 0,
    "react/jsx-uses-react": 1,
    "graphql/template-strings": [
      "error",
      {
        env: "relay",
        schemaJsonFilepath: path.resolve(__dirname, "./schema.json"),
        tagName: "graphql"
      }
    ],
  },
  "env": {
    "es6": true,
    "node": true,
    "browser": true,
    "jest": true,
  },
  "extends": [
    "eslint:recommended",
    "plugin:react/recommended",
  ],
  "plugins": [
    "react",
    "graphql"
  ],
  "parser": "babel-eslint",
  "parserOptions": {
    "sourceType": "module",
    "allowImportExportEverywhere": true,
    "ecmaFeatures": {
      "jsx": true,
      "experimentalObjectRestSpread": true
    },
    "ecmaVersion": 2020,
  }
};