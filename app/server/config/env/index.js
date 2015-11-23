var path = require('path'),
	devConfigPath = path.join(__dirname, './development.js'),
	productionConfigPath = path.join(__dirname, './production.js');

if (process.env.NODE_ENV === 'production') {
    module.exports = require(productionConfigPath);
} else {
    module.exports = require(devConfigPath);
}