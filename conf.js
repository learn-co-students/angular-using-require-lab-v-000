exports.config = {
	seleniumAddress: 'http://127.0.0.1:4444/wd/hub',
	specs: ['spec/server.js', 'spec/**/*.spec.js'],
   capabilities: {
    'browserName': 'phantomjs',
    'phantomjs.binary.path': require('phantomjs-prebuilt').path,
    'phantomjs.ghostdriver.cli.args': ['--loglevel=DEBUG']
  },
  framework: 'jasmine2',
	rootElement: '.app'
};