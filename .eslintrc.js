module.exports = {
  root: true,
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
    'prettier'
  ],
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint', '@typescript-eslint', 'local', 'prettier'],
  rules: {
    strict: 'error',
    complexity: 0,
    'max-nested-callbacks': ['error', 3],
    'no-useless-escape': 0,
    'react/jsx-no-bind': 0,
    'no-restricted-syntax': 0,
    'max-depth': ['error', 3],
    'new-cap': 0,
    'no-nested-ternary': 0,
    'require-await': 'error',
    'no-func-assign': 'error',
    'flowtype/no-types-missing-file-annotation': 0,
    'flowtype/generic-spacing': 0,
    'object-shorthand': [
      'error',
      'methods',
      { avoidExplicitReturnArrows: false }
    ],
    'object-curly-spacing': ['error', 'always'],
    'no-useless-return': 'error',
    'no-else-return': 'error',
    'no-return-await': 'error',
    'react/prop-types': 0,
    'no-underscore-dangle': 0,
    'react/prefer-stateless-function': 0,
    'react/require-optimization': 0,
    'react/default-props-match-prop-types': 0,
    'react/require-default-props': 0,
    'no-var': 'error',
    'react/no-array-index-key': 0,
    'global-require': 0,
    'react/no-unused-prop-types': 0,
    'react/sort-comp': 0,
    'react/jsx-space-before-closing': 0,
    'react/jsx-closing-tag-location': 0,
    'react/display-name': 0,
    'import/no-extraneous-dependencies': [
      'off',
      {
        devDependencies: ['.storybook/**', 'stories/**']
      }
    ],
    'import/prefer-default-export': 0,
    'import/extensions': 0,
    'import/no-unresolved': 0,
    'no-use-before-define': 0,
    'no-unused-expressions': 0,
    '@typescript-eslint/no-empty-function': 0,
    '@typescript-eslint/no-empty-interface': 0,
    '@typescript-eslint/no-unused-vars': 2,
    '@typescript-eslint/camelcase': 1,
    '@typescript-eslint/no-explicit-any': 0,
  },
  globals: {
    'window': 'readonly',
    'module': 'writable',
    'it': 'readonly',
    'require': 'readonly',
  },
  overrides: [
    {
      files: ['**/*.tsx'],
      rules: {
        'local/jsx-uses-my-pragma': 'error',
        'local/jsx-uses-vars': 'error',
      },
    },
    {
      files: ['**/*.js', '**/*.jsx'],
      rules: {
        '@typescript-eslint/explicit-function-return-type': 'off',
      }
    },
  ],
};
