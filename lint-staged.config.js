const lintStagedConfig = {
    '**/*.ts?(x)': () => ['tsc -p tsconfig.json', 'eslint . --fix --cache'],
};

module.exports = lintStagedConfig;
