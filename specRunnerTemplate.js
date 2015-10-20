// Use a template string instead of an html file to avoid node/webpack path issue
var template = '<!DOCTYPE html>' +
  '<html>' +
  '<head>' +
    '<meta charset="UTF-8">' +
    '<title>Jasmine Spec Runner</title>' +
    '{% for (var i = 0; i < o.htmlWebpackPlugin.options.jasmineCssFiles.length; i++) { %}' +
      '<link rel="stylesheet" href="{%=o.htmlWebpackPlugin.options.jasmineCssFiles[i]%}">' +
    '{% } %}' +
    '{% for (var i = 0; i < o.htmlWebpackPlugin.options.jasmineJsFiles.length; i++) { %}' +
      '<script src="{%=o.htmlWebpackPlugin.options.jasmineJsFiles[i]%}"></script>' +
    '{% } %}' +
  '</head>' +
  '<body>' +
  '</body>' +
  '</html>';

module.exports = template;
