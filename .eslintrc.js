module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  parserOptions: {
    parser: 'babel-eslint'
  },
  extends: [
    '@nuxtjs',
    'plugin:nuxt/recommended',
    'plugin:prettier/recommended',
    'prettier',
    'prettier/vue'
  ],
  plugins: ['prettier', 'vue'],
  // add your custom rules here
  rules: {
    'no-console': ['warn', { allow: ['log', 'warn', 'error'] }],
    'no-unused-vars': 'warn'
  }
}
