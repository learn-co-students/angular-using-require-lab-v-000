function Tabs() {
	return {
		restrict: 'E',
		scope: {},
		transclude: true,
		controller: function($scope) {
			this.tabs = [];
			console.log(this.tabs)
			var mv = this;
			this.addTab = function(tab) {
				this.tabs.push(tab)
			};	
			this.makeActive = function(tab){
				this.active = tab
				for(var i = 0, tabs = this.tabs; i < tabs.length; i++) {
					if (this.active.label == tabs[i].label) {
						tabs[i].active = true
					} else {
						tabs[i].active = false
					}
				}
			}
		},
		controllerAs: 'tabs',
		template: [
			'<div class="tabs">',
				'<ul class="tabs__list"><li ng-repeat="tab in tabs.tabs" ng-click="tabs.makeActive(tab)">{{ tab.label }}</li></ul>',
				'<div class="tabs__content" ng-transclude>',
				'</div>',
				'</div>'
		].join('')
	}
}

angular
	.module('app')
	.directive('tabs', Tabs)