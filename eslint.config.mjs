import globals from 'globals'
import pluginJs from '@eslint/js'
import pluginReactConfig from 'eslint-plugin-react/configs/recommended.js'

export default {
  languageOptions: { globals: globals.browser },
  extends: ['plugin:@eslint/js/recommended', 'plugin:react/recommended'],
  plugins: ['react'],
  overrides: [
    {
      files: ['*.js', '*.jsx'],
      rules: {
        // Configure any additional rules specific to JavaScript/JSX files
      },
    },
  ],
  settings: {
    react: {
      version: 'detect', // Automatically detect the React version
    },
  },
}
