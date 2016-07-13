exports.config = {
	seleniumAddress: 'http://localhost:4444/wd/hub',
	specs: ['spec/server.js', 'spec/**/*.spec.js'],
	rootElement: '.app'
};