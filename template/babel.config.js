module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['.'],
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
          '@helpers': './src/helpers',
          '@shared-state': './src/shared-state',
          '@containers': './src/container',
          '@resources': './src/resources',
          '@components': './src/components',
          '@assets': './src/assets',
          '@storyboards': './src/storyboards',
          '@navigation': './src/navigation',
          '@hooks': './src/hooks',
          '@hocs': './src/hocs',
        },
      },
    ],
  ],
};
