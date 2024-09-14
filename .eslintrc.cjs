module.exports = {
  extends: ['@adonisjs/eslint-config/app'],
  plugins: ['simple-import-sort', 'unused-imports'],
  rules: {
    '@typescript-eslint/consistent-type-imports': 'error',
    'simple-import-sort/imports': 'error',
    'simple-import-sort/exports': 'error',
  },
}
