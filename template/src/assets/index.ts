// install extension Generate Index
// @index('./*.{png,jpg,svg}', (f, _) => `export const ${_.constantCase(f.name)} = require('${f.path}${f.ext}')`)
export const LOGO = require('./logo.png');
export * from './svg';