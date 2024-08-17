/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config, options) => {
    config.module.rules.push({
      test: /\.pdf/,
      type: "asset/resource",
      generator: {
        filename: "static/[hash][ext]",
      },
    });

    return config;
  },
  babel: {
    plugins: [
      ["@babel/plugin-transform-react-jsx", { throwIfNamespace: false }],
    ],
  },
};

export default nextConfig;
