module.exports = async (phase, { defaultConfig }) => {
  /**
   * @type {import('next').NextConfig}
   */
  const nextConfig = {
    images: {
      // domains: ["example.com", "example2.com"],
    },
  };
  return nextConfig;
};
