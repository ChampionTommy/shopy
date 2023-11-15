const dotenv = require("dotenv-flow");
const { join } = require("path");

const dotenvConfig = dotenv.config({
  node_env: process.env.NEXT_PUBLIC_APP_ENV,
  silent: true,
});

module.exports = {
  env: dotenvConfig.parsed,
  webpack(config, {isServer}) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"],
    });

    if(!isServer) {
      config.resolve = {
        ...config.resolve,
        fallback: {
          fs: false
        }
      }
    }

    return config;
  },
  output: "standalone",
  experimental: {
    outputFileTracingRoot: join(__dirname, "../../"),
  },
  pageExtensions: ["tsx", "ts"],
  reactStrictMode: true,
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  transpilePackages: ["types", "schemas", "app-constants"],
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "i.imgur.com",
        pathname: "/**",
      },
    ],
  },
};
