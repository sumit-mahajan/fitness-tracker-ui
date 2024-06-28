/** @type {import('next').NextConfig} */

const nextConfig = {};

const withPWA = require("next-pwa")({
  dest: "public/pwa",
  register: true,
  skipWaiting: true,
});

module.exports = withPWA(nextConfig);
