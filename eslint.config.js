import js from '@eslint/js';
import prettier from 'eslint-config-prettier/flat';
import react from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';
import globals from 'globals';
import typescript from 'typescript-eslint';

/** @type {import('eslint').Linter.Config[]} */
export default [
    js.configs.recommended,
    ...typescript.configs.recommended,
    {
        ...react.configs.flat.recommended,
        ...react.configs.flat['jsx-runtime'], // Required for React 17+
        languageOptions: {
            globals: {
                ...globals.browser,
            },
        },
        rules: {
            'react/react-in-jsx-scope': 'off',
            'react/prop-types': 'off',
            'react/no-unescaped-entities': 'off',
            '@typescript-eslint/no-unused-vars': ['warn', { 
                'argsIgnorePattern': '^_',
                'varsIgnorePattern': '^_',
                'caughtErrorsIgnorePattern': '^_'
            }],
            '@typescript-eslint/no-explicit-any': 'warn',
        },
        settings: {
            react: {
                version: 'detect',
            },
        },
    },
    {
        plugins: {
            'react-hooks': reactHooks,
        },
        rules: {
            'react-hooks/rules-of-hooks': 'error',
            'react-hooks/exhaustive-deps': 'warn',
        },
    },
    {
        ignores: [
            'vendor', 
            'node_modules', 
            'public', 
            'bootstrap/ssr', 
            'tailwind.config.js',
            'resources/css/**/*.css', // Ignore CSS files from ESLint
            '**/*.css', // Ignore all CSS files globally
            'resources/css/**', // Ignore entire CSS directory
        ],
    },
    {
        // CSS files - allow @apply and other Tailwind directives
        files: ['**/*.css'],
        languageOptions: {
            parser: null, // Disable parsing for CSS files
        },
        rules: {
            'css/no-at-rules': 'off',
            'css/unknown-at-rules': 'off',
        },
    },
    prettier, // Turn off all rules that might conflict with Prettier
];
