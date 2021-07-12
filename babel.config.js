const config = {
      presets: ['next/babel'],
      plugins: [
        [
          'styled-components',
          {
            ssr: true,
            displayName: true,
            minify: false,
            pure: true,
          },
        ],
      ],
    }
  

module.exports = config;
