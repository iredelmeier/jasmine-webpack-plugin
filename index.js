'use strict';

var util = require('util');
var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var jasmineCore = require('jasmine-core');
var template = require('./specRunnerTemplate');

var jasmineFiles = jasmineCore.files;
var jasminePath = resolveJasmineDir(jasmineFiles.path);
var jasmineBootDir = resolveJasmineDir(jasmineFiles.bootDir);

var jasmineJsFiles = resolveJasmineFiles(jasminePath, jasmineFiles.jsFiles);
var jasmineCssFiles = resolveJasmineFiles(jasminePath, jasmineFiles.cssFiles);
var jasmineBootFiles = resolveJasmineFiles(jasmineBootDir, jasmineFiles.bootFiles);

function JasmineWebpackPlugin(options) {

  options = options || {};
  var externalJsFiles = options.externalJsFiles || [];

  var htmlOptions = {
    inject: true,
    filename: options.filename || '_specRunner.html',
    templateContent: template,
    jasmineJsFiles: jasmineJsFiles.concat(jasmineBootFiles),
    jasmineCssFiles: jasmineCssFiles,
    externalJsFiles: externalJsFiles
  };

  for (var attrname in options.htmlOptions) {
    htmlOptions[attrname] = options.htmlOptions[attrname];
  }

  return new HtmlWebpackPlugin(htmlOptions);
}

function resolveJasmineDir(dirname) {
  return dirname.replace(process.cwd(), '').replace(/^\//, '');
}

function resolveJasmineFiles(dirname, files) {
  return files.map(function(file) { return path.join(dirname, file); });
}

module.exports = JasmineWebpackPlugin;
