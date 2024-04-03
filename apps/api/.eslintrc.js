/** @type {import("eslint").Linter.Config} */
module.exports = {
  extends: ['@youtility/eslint-config/server.js'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: true
  }
};
