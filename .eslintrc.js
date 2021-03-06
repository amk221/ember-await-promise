module.exports = {
  root: true,
  parserOptions: {
    ecmaVersion: 6,
    sourceType: 'module'
  },
  extends: 'eslint:recommended',
  env: {
    'browser': true
  },
  rules: {
    // Possible Errors

    'no-cond-assign': ['error', 'except-parens'],
    'no-console': 'error',
    'no-constant-condition': ['error', {
      checkLoops: false
    }],
    'no-control-regex': 'error',
    'no-debugger': 'error',
    'no-dupe-args': 'error',
    'no-dupe-keys': 'error',
    'no-duplicate-case': 'error',
    'no-empty-character-class': 'error',
    'no-empty': ['error', {
      allowEmptyCatch: true
    }],
    'no-ex-assign': 'error',
    'no-extra-boolean-cast': 'error',
    'no-extra-parens': 'error',
    'no-extra-semi': 'error',
    'no-func-assign': 'error',
    'no-inner-declarations': 'error',
    'no-invalid-regexp': 'error',
    'no-irregular-whitespace': ['error', {
      skipStrings: true
    }],
    'no-obj-calls': 'error',
    'no-prototype-builtins': 'off',
    'no-regex-spaces': 'error',
    'no-sparse-arrays': 'error',
    'no-template-curly-in-string': 'error',
    'no-unexpected-multiline': 'error',
    'no-unreachable': 'error',
    'no-unsafe-finally': 'error',
    'no-unsafe-negation': 'error',
    'use-isnan': 'error',
    'valid-jsdoc': 'off',
    'valid-typeof': 'error',

    // Best practices

    'accessor-pairs': 'error',
    'array-callback-return': 'off',
    'block-scoped-var': 'error',
    'class-methods-use-this': 'error',
    'complexity': 'off',
    'consistent-return': 'off',
    'curly': 'error',
    'default-case': 'off',
    'dot-location': ['error', 'property'],
    'dot-notation': 'error',
    'eqeqeq': 'error',
    'guard-for-in': 'off',
    'no-alert': 'error',
    'no-eval': 'error',
    'no-caller': 'error',
    'no-case-declarations': 'error',
    'no-div-regex': 'error',
    'no-else-return': 'off',
    'no-empty-function': 'off',
    'no-empty-pattern': 'error',
    'no-extend-native': 'error',
    'no-eq-null': 'error',
    'no-extra-bind': 'error',
    'no-extra-label': 'error',
    'no-fallthrough': 'error',
    'no-floating-decimal': 'error',
    'no-global-assign': 'error',
    'no-implicit-coercion': 'off',
    'no-implicit-globals': 'error',
    'no-implied-eval': 'error',
    'no-invalid-this': 'off',
    'no-iterator': 'error',
    'no-labels': 'error',
    'no-lone-blocks': 'error',
    'no-loop-func': 'error',
    'no-magic-numbers': 'off',
    'no-multi-spaces': 'off',
    'no-multi-str': 'error',
    'no-new-func': 'error',
    'no-new-wrappers': 'error',
    'no-new': 'error',
    'no-octal-escape': 'error',
    'no-octal': 'error',
    'no-param-reassign': 'off',
    'no-proto': 'error',
    'no-redeclare': 'error',
    'no-restricted-properties': 'off',
    'no-return-assign': 'off',
    'no-script-url': 'error',
    'no-self-assign': 'error',
    'no-self-compare': 'error',
    'no-sequences': 'error',
    'no-throw-literal': 'error',
    'no-unmodified-loop-condition': 'error',
    'no-unused-expressions': 'error',
    'no-unused-labels': 'error',
    'no-useless-call': 'error',
    'no-useless-concat': 'error',
    'no-useless-escape': 'off',
    'no-useless-return': 'error',
    'no-void': 'error',
    'no-warning-comments': 'error',
    'no-with': 'error',
    'radix': 'error',
    'vars-on-top': 'error',
    'wrap-iife': 'error',
    'yoda': 'error',

    // Strict mode

    'strict': 'error',

    // Variables

    'init-declarations': 'off',
    'no-catch-shadow': 'error',
    'no-delete-var': 'off',
    'no-label-var': 'error',
    'no-restricted-globals': 'off',
    'no-shadow-restricted-names': 'error',
    'no-shadow': 'off',
    'no-undef': 'error',
    'no-undef-init': 'error',
    'no-undefined': 'off',
    'no-unused-vars': 'error',
    'no-use-before-define': 'off',

    // NodeJS & Common JS

    'callback-return': 'off',
    'global-require': 'error',
    'handle-callback-err': 'error',
    'no-mixed-requires': 'error',
    'no-new-require': 'error',
    'no-path-concat': 'error',
    'no-process-env': 'off',
    'no-process-exit': 'error',
    'no-restricted-modules': 'off',
    'no-sync': 'off',

    // Stylistic issues

    'array-bracket-spacing': 'off',
    'block-spacing': 'error',
    'brace-style': ['error', '1tbs'],
    'camelcase': 'error',
    'comma-dangle': ['error', 'only-multiline'],
    'comma-spacing': ['error', {
      before: false,
      after: true
    }],
    'computed-property-spacing': ['error', 'never'],
    'comma-style': ['error', 'last'],
    'consistent-this': ['error', '_this'],
    'eol-last': 'off',
    'func-call-spacing': ['error', 'never'],
    'func-name-matching': 'off',
    'func-names': 'off',
    'func-style': 'off',
    'id-blacklist': ['error', 'callback'],
    'id-length': 'off',
    'id-match': 'off',
    // 'indent': ['error', 2],
    'jsx-quotes': 'off',
    'key-spacing': ['error', {
      beforeColon: false,
      afterColon: true,
      mode: 'minimum'
    }],
    'keyword-spacing': ['error', {
      before: true,
      after: true,
      overrides: {
        throw: {
          before: false,
          after: false
        }
      }
    }],
    'line-comment-position': 'off',
    'linebreak-style': ['error', 'unix'],
    'lines-around-comment': 'off',
    'lines-around-directive': ['error', 'always'],
    'max-depth': ['error', 2],
    'max-len': ['error', {
      code: 80,
      tabWidth: 2,
      ignoreComments: true
    }],
    'max-lines': ['error', 600],
    'max-nested-callbacks': ['error', 3],
    'max-params': ['error', 5],
    'max-statements-per-line': ['error', {
      max: 2
    }],
    'max-statements': 'off',
    'multiline-ternary': 'off',
    'new-cap': ['error', {
      newIsCap: true,
      capIsNew: true,
      properties: false
    }],
    'new-parens': 'off',
    'newline-after-var': 'off',
    'newline-before-return': 'off',
    'newline-per-chained-call': 'off',
    'no-array-constructor': 'error',
    'no-bitwise': 'error',
    'no-continue': 'error',
    'no-inline-comments': 'off',
    'no-lonely-if': 'error',
    'no-mixed-operators': 'off',
    'no-mixed-spaces-and-tabs': 'error',
    'no-multiple-empty-lines': 'off',
    'no-negated-condition': 'off',
    'no-nested-ternary': 'off',
    'no-plusplus': 'off',
    'no-restricted-syntax': 'off',
    'no-tabs': 'error',
    'no-ternary': 'off',
    'no-new-object': 'error',
    'no-spaced-func': 'error',
    'no-trailing-spaces': 'error',
    'no-underscore-dangle': 'off',
    'no-unneeded-ternary': 'error',
    'no-whitespace-before-property': 'error',
    'object-curly-newline': 'off',
    'object-curly-spacing': 'off',
    'object-property-newline': 'off',
    'one-var-declaration-per-line': 'off',
    'one-var': 'off',
    'operator-assignment': 'error',
    'operator-linebreak': ['error', 'after'],
    'padded-blocks': 'off',
    'quote-props': ['error', 'as-needed'],
    'quotes': ['error', 'single', {
      avoidEscape: true,
      allowTemplateLiterals: true
    }],
    'require-jsdoc': 'off',
    'semi-spacing': ['error', {
      before: false
    }],
    'semi': ['error', 'always'],
    'sort-keys': 'off',
    'sort-vars': 'off',
    'space-before-blocks': 'error',
    'space-before-function-paren': ['error', 'never'],
    'space-in-parens': 'off',
    'space-infix-ops': 'error',
    'space-unary-ops': 'error',
    'spaced-comment': ['error', 'always'],
    'unicode-bom': 'error',
    'wrap-regex': 'off',
    'prefer-spread': 'error',

    // ECMAScript 6

    'arrow-body-style': 'off',
    'arrow-parens': ['error', 'as-needed'],
    'arrow-spacing': ['error', {
      before: true,
      after: true
    }],
    'constructor-super': 'error',
    'generator-star-spacing': ['error', {
      before: false,
      after: true
    }],
    'no-class-assign': 'error',
    'no-confusing-arrow': 'error',
    'no-const-assign': 'error',
    'no-dupe-class-members': 'error',
    'no-duplicate-imports': 'error',
    'no-new-symbol': 'error',
    'no-restricted-imports': 'off',
    'no-this-before-super': 'error',
    'no-useless-computed-key': 'error',
    'no-useless-constructor': 'error',
    'no-useless-rename': 'error',
    'no-var': 'error',
    'object-shorthand': ['error', 'always'],
    'prefer-arrow-callback': 'off',
    'prefer-const': 'error',
    'prefer-numeric-literals': 'off',
    'prefer-rest-params': 'off',
    'prefer-spread': 'error',
    'prefer-template': 'error',
    'require-yield': 'error',
    'rest-spread-spacing': 'off',
    'sort-imports': 'off',
    'symbol-description': 'off',
    'template-curly-spacing': ['error', 'never'],
    'yield-star-spacing': ['error', {
      before: false,
      after: true
    }]
  }
};
