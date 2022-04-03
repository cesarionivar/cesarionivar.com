module.exports = {
  reactStrictMode: true,
  rules: {
    '@next/next/no-img-element': 'off',
  },
  async redirects() {
    return [
      {
        source: '/youtube',
        destination: 'https://www.youtube.com/channel/UCuL4sjpcTuHC1QB8YHEtmMQ',
        permanent: true,
      },
    ];
  },
};
