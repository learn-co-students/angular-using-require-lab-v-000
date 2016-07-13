var path = require('path');

describe('Directive Test', function() {
	browser.get('http://localhost:8080');

	it('should display the tabs correctly', function() {
		var content = element(by.css('tab[label="Tab 1"]'));
		expect(content.getText()).toEqual('Tab 1 contents!');

		var content = element(by.css('tab[label="Tab 2"]'));
		expect(content.getText()).toEqual('');
	});

	it('should change the tab on click', function() {
		var button = element(by.css('.tabs__list li:nth-child(2)'));

		button.click();
		
		var content = element(by.css('tab[label="Tab 2"]'));
		expect(content.getText()).toEqual('Tab 2 contents!');
	});
});