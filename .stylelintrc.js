module.exports = {
    overrides: [
      {
        files: ['*.vue', '**/*.vue', '*.html', '**/*.html'],
        customSyntax: 'postcss-html',
        rules: {
          // 禁止未知的伪类选择器
          'selector-pseudo-class-no-unknown': [true, { ignorePseudoClasses: ['deep', 'global'] }],
          // 禁止未知的伪元素选择器
          'selector-pseudo-element-no-unknown': [true, { ignorePseudoElements: ['v-deep', 'v-global', 'v-slotted'] }],
        },
      },
      {
        files: ['*.less', '**/*.less'],
        customSyntax: 'postcss-less',
        rules: {
          'less/color-no-invalid-hex': true,
          'less/no-duplicate-variables': true,
        },
      },
    ],
  };