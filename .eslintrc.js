module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb-typescript',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
    'prettier',
    'plugin:prettier/recommended',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    project: './tsconfig.json',
    sourceType: 'module',
  },
  plugins: ['react', 'react-hooks', '@typescript-eslint', 'import', 'prettier'],
  rules: {
    // "off" or 0 - turn the rule off
    // "warn" or 1 - turn the rule on as a warning (doesn't affect exit code)
    // "error" or 2 - turn the rule on as an error (exit code will be 1)

    "@typescript-eslint/ban-ts-ignore": "off",
    "    @typescript-eslint/ban-ts-comment": 'off',
    "ban-ts-comment": 'off',

    'object-curly-newline': 'off',

    'function-paren-newline': ['error', 'multiline-arguments'],
    // 🔧 Fixable, Enforce consistent line breaks inside function

    'max-len': [
      2,
      120,
      2,
      {
        ignoreUrls: true,
        ignoreRegExpLiterals: true,
        ignorePattern: '^import .*',
      },
    ],
    // Enforce a maximum line length (max-len)

    'array-bracket-spacing': ['error', 'never'],
    // 🔧 Fixable, 	Enforce consistent spacing inside array brackets

    'array-element-newline': [
      'warn',
      'consistent',
      {multiline: true, minItems: 3},
    ],
    // 🔧 Fixable, Enforce line breaks between array elements (array-element-newline)

    'keyword-spacing': 'off',
    '@typescript-eslint/keyword-spacing': [1, {before: true, after: true}],
    // 🔧 Fixable, Enforce consistent spacing before and after keywords (keyword-spacing)

    'eol-last': [0, 'never'],
    // 🔧 Fixable, The last line must be not empty (--fix)

    'no-duplicate-imports': 'off',
    '@typescript-eslint/no-duplicate-imports': [2, {includeExports: true}],
    // Disallow duplicate imports (no-duplicate-imports)

    'default-param-last': 'off',
    '@typescript-eslint/default-param-last': [0], // <-------------------------------------------------- NEED REVIEW
    // Enforce default parameters to be last (default-param-last)

    quotes: 'off',
    '@typescript-eslint/quotes': [2],
    // 🔧 Fixable, Enforce the consistent use of either backticks, double, or single quotes

    'no-shadow': 'off',
    '@typescript-eslint/no-shadow': [
      1,
      {
        builtinGlobals: false,
        hoist: 'never',
      },
    ],
    // ✅ Recommended, disallow variable declarations from shadowing variables declared in the outer scope (no-shadow)

    '@typescript-eslint/no-explicit-any': [1, {ignoreRestArgs: true}], // <---------------------------- NEED REVIEW
    // 🔧 Fixable, ✅ Recommended, Disallow usage of the any type (no-explicit-any)

    'react/no-unescaped-entities': [
      2,
      {
        forbid: [
          {
            char: '\'',
            alternatives: [`&apos;`],
          },
          {},
        ],
      },
    ],
    // 🔧 Fixable, Prevent invalid characters from appearing in markup (react/no-unescaped-entities)

    '@typescript-eslint/naming-convention': [
      2,
      {
        selector: 'variable',
        format: ['camelCase', 'UPPER_CASE', 'StrictPascalCase', 'snake_case'],
      },
      {
        selector: 'typeParameter',
        format: ['PascalCase'],
        prefix: ['T'],
      },
      {
        selector: 'interface',
        format: ['PascalCase'],
      },
    ],
    // Enforces naming conventions for everything across a codebase

    '@typescript-eslint/no-var-requires': 1,
    // Disallows the use of require statements except in import statements

    // JS
    semi: [0],
    '@typescript-eslint/semi': [2, 'always'],
    'prefer-const': 2,
    curly: [2, 'all'],
    // 🔧 Fixable, Require Following Curly Brace Conventions

    'no-redeclare': [2, {builtinGlobals: true}],
    'operator-linebreak': [
      2,
      'before',
      {
        overrides: {
          '?': 'before',
          ':': 'before',
          '=': 'after',
          '||': 'after',
          '&&': 'after',
          '+': 'after',
        },
      },
    ],

    'no-console': [0, {allow: ['warn', 'error']}],
    // disallow the use of console

    'brace-style': [2, '1tbs'],
    // 🔧 Fixable, Require Brace Style (brace-style)

    'arrow-body-style': 0,
    'arrow-parens': 0,
    'no-param-reassign': [2, {props: true}],
    'padding-line-between-statements': [
      2,
      {blankLine: 'always', prev: '*', next: 'return'},
      {blankLine: 'always', prev: ['const', 'let', 'var'], next: '*'},
      {
        blankLine: 'any',
        prev: ['const', 'let', 'var'],
        next: ['const', 'let', 'var'],
      },
      {blankLine: 'always', prev: 'directive', next: '*'},
      {blankLine: 'always', prev: 'block-like', next: '*'},
    ],

    // React
    'react/prop-types': 0,
    // Prevent missing props validation in a React component definition (react/prop-types)

    'import/prefer-default-export': 2,
    // When there is only a single export from a module, prefer using default export over named export.

    'react/jsx-filename-extension': [1, {extensions: ['.tsx']}],
    /// Restrict file extensions that may contain JSX (react/jsx-filename-extension)

    'standard/no-callback-literal': 0,
    'react/destructuring-assignment': 0,
    'react/jsx-props-no-spreading': 0,
    'react/state-in-constructor': [2, 'never'],
    'react-hooks/rules-of-hooks': 2,
    'jsx-a11y/label-has-for': 0,
    'react/jsx-uses-react': 'off',
    'react/react-in-jsx-scope': 'off',

    // Typescript
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/no-unused-vars': ['error'],
    '@typescript-eslint/no-unused-expressions': ['error'],
    '@typescript-eslint/indent': ['error', 2],
    '@typescript-eslint/ban-types': [
      'error',
      {
        extendDefaults: true,
        types: {
          '{}': false,
        },
      },
    ],
    '@typescript-eslint/explicit-module-boundary-types': 'off',
  },
};
