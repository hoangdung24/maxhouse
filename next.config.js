module.exports = async (phase, { defaultConfig }) => {
  /**
   * @type {import('next').NextConfig}
   */
  const nextConfig = {
    images: {
      // domains: ["example.com", "example2.com"],
    },
    eslint: {
      ignoreDuringBuilds: true,
    },
    i18n: {
      locales: ["vi", "en"],
      defaultLocale: "vi",
    },
  };
  return nextConfig;
};
