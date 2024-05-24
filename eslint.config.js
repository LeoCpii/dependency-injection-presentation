import js from '@eslint/js';
import tseslint from 'typescript-eslint';

export default [
    js.configs.recommended,
    ...tseslint.configs.recommended,
    {
        rules: {
            'no-unused-vars': 'warn',
            'no-undef': 'warn',
            'indent': ['error', 4, { 'SwitchCase': 1 }],
            'semi': ['error', 'always'],
            'quotes': ['error', 'single'],
            '@typescript-eslint/ban-ts-comment': 'off',
            'import/no-anonymous-default-export': 'off',
            '@typescript-eslint/no-explicit-any': ['off'],
            '@typescript-eslint/no-unused-vars': ['warn'],
        }
    }
];