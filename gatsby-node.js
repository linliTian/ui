exports.onCreateWebpackConfig = ({ stage, loaders, actions }) => {
  if (stage === 'build-html' || stage === `develop-html`) {
    actions.setWebpackConfig({
      module: {
        rules: [
          {
            test: /react-windowed-select/,
            use: loaders.null(),
          },
          {
            test: /react-live/,
            use: loaders.null(),
          },
        ],
      },
    });
  }
};
