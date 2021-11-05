module.exports = {
  root: true,
  extends: ["@theoparis/eslint-config"],
  settings: {
    react: {
      version: "preact",
      pragma: "h"
    }
  },
  rules: {
    "no-shadow": "off",
    "react/react-in-jsx-scope": "off",
    "react/prop-types": "off",
    "react/require-default-props": "off"
  }
};
