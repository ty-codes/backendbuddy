// https://prettier.io/docs/en/options.html

module.exports = {
  bracketSpacing: true,
  bracketSameLine: false,
  singleQuote: true,
  trailingComma: 'all',
  arrowParens: 'avoid',
  importOrder: [
    '^react/(.*)$',
    '^hooks',
    'lodash',
    '@iconify',
    '^layouts/(.*)$',
    '^atoms/(.*)$',
    '^components/(.*)$',
    '^views/(.*)$',
    '^store/(.*)$',
    '^utils/(.*)$',
    '^assets/(.*)$',
    '^constants/(.*)$',
    '^context/(.*)$',
    '^[./].*(?<!\\.(c|le|sc)ss)$',
    '\\.(c|le|sc)ss$',
    '^[./]',
  ],
  importOrderSeparation: false,
  importOrderSortSpecifiers: true,
};
