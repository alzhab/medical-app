module.exports = {
	presets: ['module:metro-react-native-babel-preset'],
	plugins: [
		['module-resolver',
			{
				cwd: 'babelrc',
				root: ['./'],
				extensions: ['.js', '.ios.js', '.android.js', '.ts', '.tsx', '.jsx'],
				alias: {
					'@assets': './src/assets',
					'@icons': './src/assets/icons/index.tsx',
					'@components': './src/components',
					'@atoms': './src/components/atoms/index.tsx',
					'@molecules': './src/components/molecules/index.ts',
					'@organisms': './src/components/organisms/index.tsx',
					'@navigations': './src/navigations/index.ts',
					'@modules': './src/modules/index.tsx',
					'@services': './src/services',
					'@styles': './src/styles',
					'@utils': './src/utils/index.tsx',
					'@stores': './src/stores/index.tsx',
					'@types': './src/types/index.ts',
				},
			},
		],
		['@babel/plugin-proposal-decorators', {legacy: true}],
	],
};
