module.exports = {
    "env": {
        "browser": true,
        "es2021": true
    },
    "extends": [
        "plugin:react/recommended",
        "plugin:@typescript-eslint/recommended",
        "google"
    ],
    "parser": "@typescript-eslint/parser",
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true
        },
        "ecmaVersion": 2021,
        "sourceType": "module"
    },
    "plugins": [
        "react",
        "@typescript-eslint",
        "react-hooks"
    ],
    "rules": {
    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": "warn",
    "react/jsx-filename-extension": [
      1,
      {
        "extensions": [
          ".tsx"
        ]
      }
    ],
    "import/prefer-default-export": "off",
    "require-jsdoc": "off",
  },
  "settings": {
      "import/resolver": {
          "typescript": {}
      },
      "react": {
          "version": "detect"
      }
  }
};
