/* eslint-disable */

export default {
  "*.{ts,tsx}": () => "npm run check-types",
  "*.{js,ts,tsx,jsx,json,md}": () => "npm run format",
  "*.{css,scss}": () => "npm run format-styles",
};
