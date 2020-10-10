module.exports = {
  "rules": {
    "indent": [
      2, 2, {"SwitchCase": 1}
    ],
    "quotes": [
      2,
      "single"
    ],
    "linebreak-style": [
      2,
      "unix"
    ],
    // "semi": [
    //   2,
    //   "always"
    // ],
    "no-console": 0,
    "react/jsx-uses-react": 1
  },
  "env": {
    "es6": true,
    "node": true,
    "browser": true
  },
  "extends": "eslint:recommended",
  "ecmaFeatures": {
    "jsx": true,
    "experimentalObjectRestSpread": true
  },
  "plugins": [
    "react"
  ],
  "parser": "babel-eslint",
  "parserOptions": {
    "sourceType": "module",
    "allowImportExportEverywhere": true
  }
};