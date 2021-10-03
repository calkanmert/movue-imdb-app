module.exports = {
    root: true,
    env: {
        node: true,
    },
    extends: [
        'plugin:vue/essential',
        '@vue/airbnb',
    ],
    parserOptions: {
        parser: 'babel-eslint',
    },
    rules: {
        'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
        'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
        indent: ['error', 4],
        'linebreak-style': 0,
        'newline-per-chained-call': [
            'error',
            {
                ignoreChainWithDepth: 8,
            },
        ],
        'no-new': 0,
        'no-shadow': 0,
        'no-param-reassign': 0,
        'no-unused-vars': 0,
        'consistent-return': 0,
        'max-len': 0,
    },
};
