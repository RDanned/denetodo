module.exports = {
  preset: '@vue/cli-plugin-unit-jest',
  moduleNameMapper: {
    ".+\\.(css|styl|less|sass|scss|png|jpg|svg|ttf|woff|woff2)$":"rootDir>/tests/mock.js",
  }
}