'use strict';

var util = require('util');
var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var jasmineCore = require('jasmine-core');
var template = require('./specRunnerTemplate');

var jasmineFiles = jasmineCore.files;
var jasmineJsFiles = resolveJasmineFiles(jasmineFiles.path, jasmineFiles.jsFiles);
var jasmineCssFiles = resolveJasmineFiles(jasmineFiles.path, jasmineFiles.cssFiles);
var jasmineBootFiles = resolveJasmineFiles(jasmineFiles.bootDir, jasmineFiles.bootFiles);

function JasmineWebpackPlugin(options) {
  options = options || {};

  return new HtmlWebpackPlugin({
    inject: true,
    filename: options.filename || '_specRunner.html',
    templateContent: template,
    jasmineJsFiles: jasmineJsFiles.concat(jasmineBootFiles),
    jasmineCssFiles: jasmineCssFiles
  });
}

function resolveJasmineFiles(dirname, files) {
  dirname = dirname.replace(__dirname, '');
  return files.map(function(file) {
    return path.join(dirname, file);
  });
}

module.exports = JasmineWebpackPlugin;
