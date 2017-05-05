# Jasmine Webpack Plugin

A simple webpack plugin that creates a specRunner.html file for running Jasmine specs
in the browser, e.g., for use with webpack-dev-server and hot module replacement for
fast development.

### Usage

In your webpack configuration:

```javascript
// webpack-test.config.js

var JasmineWebpackPlugin = require('jasmine-webpack-plugin');

module.exports = {
  entry: ['specRoot.js'],
  // ... more configuration
  plugins: [new JasmineWebpackPlugin()]
};
```

### Options

**filename** - output filename; defaults to _specRunner.html

### Notes

Webpack doesn't support wildcards in config.entry. As a workaround to easily build
and watch your spec files, you can provide something like this in your entry file:

```javascript
// specRoot.js

const requireAll = (requireContext) => { requireContext.keys().map(requireContext); };

requireAll(require.context('spec/helpers/', true, /\.js$/));
requireAll(require.context('spec/', true, /[sS]pec\.js$/));
```

See [require.context](https://webpack.github.io/docs/context.html#require-context)
