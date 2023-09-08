module.exports = {
  singleQuote: true,
  printWidth: 80,
  bracketSameLine: false,
  trailingComma: 'all',
  arrowParens: 'avoid',
  endOfLine: 'lf',
  // order import plugin
  importOrder: [
    '^react',
    '',
    '<BUILT_IN_MODULES>',
    '',
    '<THIRD_PARTY_MODULES>',
    '',
    '^@my-org/(.*)$',
    '',
    '^(@)(/.*)$',
    '',
    '^[.]',
  ],
  importOrderTypeScriptVersion: '4.6.4',
  plugins: ['@ianvs/prettier-plugin-sort-imports'],
};
