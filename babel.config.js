module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
};
module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src'],
        extensions: [
          '.ios.ts',
          '.android.ts',
          '.ts',
          '.ios.tsx',
          '.android.tsx',
          '.tsx',
          '.jsx',
          '.js',
          '.json',
        ],
        alias: {
          '@lineapp-components': './src/shared/components',
          '@lineapp-utils': './src/shared/utils',
          '@lineapp-themes': './src/shared/themes',
          '@lineapp-ca-modules': './src/ca/modules',
          '@lineapp-ca-navigations': './src/ca/navigations',
          '@lineapp-ca-state': './src/ca/state',
        },
      },
    ],
    ['inline-json-import', {}]
  ],
};