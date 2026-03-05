import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin("./src/i18n/request.ts");

const nextConfig: NextConfig = {
  async rewrites() {
    return [
      {
        source: "/:locale(ko|en)/app-ads.txt",
        destination: "/app-ads.txt"
      }
    ];
  }
};

export default withNextIntl(nextConfig);
