module.exports = {
    processors: [
        [
            'stylelint-processor-styled-components',
            {
                ignoreFiles: ['**/*.scss'],
            },
        ],
    ],
    extends: ['stylelint-config-styled-components'],
    plugins: ['stylelint-prettier', 'stylelint-order'],
    rules: {
        'prettier/prettier': true,
        'property-no-unknown': true,
        'color-hex-length': 'long',
        'font-family-name-quotes': 'always-where-recommended',
        'number-leading-zero': 'always',
        'length-zero-no-unit': true,
        'string-quotes': 'single',
        'string-no-newline': true,
        'unit-case': 'lower',
        'value-list-comma-space-after': 'always-single-line',
        'shorthand-property-no-redundant-values': true,
        'property-case': 'lower',
        'property-no-vendor-prefix': true,
        'declaration-colon-space-after': 'always',
        'declaration-no-important': true,
        'declaration-block-no-duplicate-properties': [
            true,
            { ignore: ['consecutive-duplicates'] },
        ],
        'declaration-block-semicolon-newline-before': 'never-multi-line',
        'declaration-block-single-line-max-declarations': 1,
        'block-no-empty': true,
        'block-opening-brace-newline-after': 'always-multi-line',
        'block-opening-brace-space-before': 'always',
        'selector-attribute-brackets-space-inside': 'never',
        'selector-type-case': 'lower',
        'selector-list-comma-newline-after': 'always',
        'rule-empty-line-before': [
            'always-multi-line',
            // first nested is required to work with prettier that removes spaces here by default
            {
                except: ['after-single-line-comment', 'first-nested'],
            },
        ],
        'media-feature-colon-space-after': 'always',
        'media-feature-parentheses-space-inside': 'never',
        'at-rule-semicolon-newline-after': 'always',
        'max-empty-lines': 2,
        'no-duplicate-selectors': true,
        'no-eol-whitespace': true,
        'no-missing-end-of-source-newline': true,
        'color-hex-case': 'lower',
    },
};