module.exports = {
  extends: 'stylelint-config-standard-scss',
  rules: {
    'declaration-block-trailing-semicolon': 'always',
    'selector-pseudo-element-no-unknown': [
      true,
      {
        ignorePseudoElements: ['v-deep'],
      },
    ],
  },
}
