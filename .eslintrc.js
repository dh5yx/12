/*
 * @Description:
 * @Author: dh
 * @Date: 2022-01-20 10:58:27
 * @LastEditors: dh
 * @LastEditTime: 2022-01-25 16:33:28
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
        'no-param-reassign': [
            // 指定函数入参可以修改
            'error',
            {
                props: true,
                ignorePropertyModificationsFor: [
                    'e', // for e.returnvalue
                    'ctx', // for Koa routing
                    'req', // for Express requests
                    'request', // for Express requests
                    'res', // for Express responses
                    'response', // for Express responses
                    'state', // for vuex state
                ],
            },
        ],
    },
};
