const path = require('path');

module.exports = {
  stories: ['../src/**/stories.mdx', '../src/**/stories.@(js|jsx|ts|tsx)'],
  addons: ['@storybook/addon-links', '@storybook/addon-essentials'],
  webpackFinal: async (config) => {
    // Transpile Gatsby module because Gatsby includes un-transpiled ES6 code.
    config.module.rules[0].exclude = [/node_modules\/(?!(gatsby)\/)/];

    // use installed babel-loader which is v8.0-beta (which is meant to work with @babel/core@7)
    config.module.rules[0].use[0].loader = require.resolve('babel-loader');

    // use @babel/preset-react for JSX and env (instead of staged presets)
    config.module.rules[0].use[0].options.presets = [
      require.resolve('@babel/preset-react'),
      require.resolve('@babel/preset-env'),
    ];

    config.module.rules[0].use[0].options.plugins = [
      // use @babel/plugin-proposal-class-properties for class arrow functions
      require.resolve('@babel/plugin-proposal-class-properties'),
      // use babel-plugin-remove-graphql-queries to remove static queries from components when rendering in storybook
      require.resolve('babel-plugin-remove-graphql-queries'),
    ];

    // Prefer Gatsby ES6 entrypoint (module) over commonjs (main) entrypoint
    config.resolve.mainFields = ['browser', 'module', 'main'];

    config.module.rules.push({
      test: /\.(ts|tsx)$/,
      loader: require.resolve('babel-loader'),
      options: {
        presets: [['react-app', { flow: false, typescript: true }]],
        plugins: [
          require.resolve('@babel/plugin-proposal-class-properties'),
          // use babel-plugin-remove-graphql-queries to remove static queries from components when rendering in storybook
          // require.resolve('babel-plugin-remove-graphql-queries'),

          // The below might be useful for the future. See https://github.com/gatsbyjs/gatsby/issues/26099#issuecomment-785821013
          [
            require.resolve('babel-plugin-remove-graphql-queries'),
            {
              stage:
                config.mode === `development` ? 'develop-html' : 'build-html',
              staticQueryDir: 'page-data/sq/d',
            },
          ],
        ],
      },
    });

    config.resolve.extensions.push('.ts', '.tsx');

    // Fix SVG errors
    // Add SVGR Loader
    // ========================================================
    // Remove svg rules from existing webpack rule
    const assetRule = config.module.rules.find(({ test }) => test.test('.svg'));

    const assetLoader = {
      loader: assetRule.loader,
      options: assetRule.options || assetRule.query,
    };

    config.module.rules.unshift({
      test: /\.svg$/,
      use: ['@svgr/webpack', assetLoader],
    });

    config.resolve.alias = {
      ...config.resolve.alias,
      // Root
      '@data': path.resolve(__dirname, '..', 'data'),
      '@samples': path.resolve(__dirname, '..', 'samples'),
      // `src/**`
      '@components': path.resolve(__dirname, '..', 'src', 'components'),
      '@icons': path.resolve(__dirname, '..', 'src', 'icons'),
      '@pages': path.resolve(__dirname, '..', 'src', 'pages'),
      '@type': path.resolve(__dirname, '..', 'src', 'types'),
      '@utils': path.resolve(__dirname, '..', 'src', 'utils'),
      '@constants': path.resolve(__dirname, '..', 'src', 'constants'),
      // `static/**`
      '@static': path.resolve(__dirname, '..', 'static'),
      '@images': path.resolve(__dirname, '..', 'static', 'images'),
      '@states': path.resolve(__dirname, '..', 'static', 'images', 'states'),
    };

    return config;
  },
};
