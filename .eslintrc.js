module.exports = {
  plugins: [
    'react',
    "jest"
  ],
  rules: {
    'indent': ['error', 4, { "MemberExpression": "off" }],
    'import/extensions': ['error', 'always', {
      'js': 'never',
      'jsx': 'never'
    }],
    'quotes': [
      2,
      'single'
    ],
    'linebreak-style': [
      0,
      'unix'
    ],
    'max-lines': ['warn', {
      'max': 400,
      'skipBlankLines': true,
      'skipComments': true,
    }],
    'max-depth': ['warn', 3],
    'semi': [2, 'never'],
    'no-multiple-empty-lines': ['error', { 'max': 2, 'maxEOF': 1 }],
    'comma-style': [
      2,
      'last'
    ],
    'comma-dangle': 0,
    'no-useless-return': 0,
    'eol-last': 1,
    'react/jsx-uses-react': 1,
    'react/jsx-uses-vars': 1,
    'react/react-in-jsx-scope': 1,
    'arrow-body-style': 0,
    'no-use-before-define': ['error', { 'functions': false }],
    'jest/no-disabled-tests': 'warn',
    'jest/no-focused-tests': 'error',
    'jest/no-identical-title': 'error',
    'jest/valid-expect': 'error'
  },
  'env': {
    'es6': true,
    'browser': true,
    'node': true
  },
  'extends': 'airbnb/base',
  'parserOptions': {
    'sourceType': 'module',
    'ecmaFeatures': {
      'ecmaVersion': 6,
      'jsx': true,
      'experimentalObjectRestSpread': true,
      'modules': true,
      'sourceType': 'module',
      'globalReturn': false
    }
  },
  'parser': 'babel-eslint',
  'settings': {
    'import/resolver': {
      'webpack': {
        'config': './webpack.config.js'
      },
      'node': {
        'extensions': ['.js','.jsx']
      }
    }
  }
}
