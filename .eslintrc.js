module.exports = {
  extends: ['react-app', 'plugin:@typescript-eslint/recommended'],
  plugins: ['@typescript-eslint'],
  overrides: [
    {
      files: ['**/*.ts', '**/*.tsx'],
      parser: '@typescript-eslint/parser',
      plugins: ['@typescript-eslint'],
      parserOptions: { project: './tsconfig.json' },
      rules: {
        '@typescript-eslint/await-thenable': 2, // Disallow await statements that are not thenable, must be only applied to TS files
      },
    },
  ],
  rules: {
    'default-case': 0, // Allow switch without a default case
    'jsx-a11y/anchor-is-valid': 0, // Force anchor tag to have valid href attribute
    'arrow-body-style': [2, 'as-needed'], // Remove all explicit returns that are not necessary
    'no-unneeded-ternary': [2, { defaultAssignment: false }], // Default ternary x ? x : 1 results to x || 1
    curly: 2, // Avoid single line ifs, force curly brace on the same line
    'newline-before-return': 2, // Add newline before every return
    'import/order': [
      1,
      {
        groups: ['builtin', 'external'],
        'newlines-between': 'always',
      },
    ], // Sort imports in groups, built-in first and external after, delimit with a newline
    'import/extensions': [
      0,
      'ignorePackages',
      {
        js: 'never',
        ts: 'never',
        tsx: 'never',
      },
    ], // Force extensions on imports apart from the JS/TS related ones
    'object-shorthand': 2, // Shorten objects - { someProp: someProp } result to {  someProp }
    'prefer-const': 2, // Force const declarations for variables that are not mutated
    'no-var': 2, // Forbid var declaration
    'spaced-comment': 2, // Force one whitespace after "//" comment
    'no-useless-return': 2, // Forbid all explicit returns that serve not purpose
    'react/jsx-boolean-value': 2, // <Component someFlag={true} /> results to <Componet someFlag />
    'no-irregular-whitespace': 2, // Silent guard from weird whitespace clashes in code
    'dot-notation': 2, // Force dot notation wheter possible - Object['string'] results to object.string
    'react/self-closing-comp': 2, // Empty JSX tags will collapse. <div></div> results to <div/>
    'no-nested-ternary': 2, // Forbid nesting of optional chaining which hinders readability

    'no-use-before-define': 0, // handled by TS
    'no-shadow': 0, // handled by TS
    'no-unused-vars': 0, // handled by TS

    '@typescript-eslint/explicit-module-boundary-types': 0, // Allow functions without explicit return type
    '@typescript-eslint/no-explicit-any': 0, // Allows any type, does make sense in some places
    '@typescript-eslint/no-unused-vars': [2, { ignoreRestSiblings: true }],
    '@typescript-eslint/no-use-before-define': 2, // Variable must be declared before its use
    '@typescript-eslint/no-shadow': 2, // Forbid declaring variables that have duplicate names in the same scope
  },
};
