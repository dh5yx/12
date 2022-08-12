/*
 * @Description:
 * @Author: dh
 * @Date: 2022-01-20 10:58:27
 * @LastEditors: dh
 * @LastEditTime: 2022-07-20 11:48:30
 */
module.exports = {
    env: {
        browser: true,
        es2021: true,
    },
    extends: ['plugin:vue/essential', 'airbnb-base', 'plugin:prettier/recommended'],
    parserOptions: {
        ecmaVersion: 'latest',
        parser: '@typescript-eslint/parser',
        sourceType: 'module',
    },
    plugins: ['vue', '@typescript-eslint'],
    rules: {
        'import/no-unresolved': 'off',
        'import/extensions': 'off',
        'vue/no-multiple-template-root': 'off',
        'no-console': 'off',
        'vue/multi-word-component-names': 'off',
        'func-names': 'off',
        'no-plusplus': 'off',
        'no-bitwise': 'off',
        'no-unused-expressions': 'off',
        'import/no-extraneous-dependencies': ['error', { devDependencies: true }],
        'no-param-reassign': 'off',
        'class-methods-use-this': 'off',
    },
};
