function Tabs() {
	return {
		restrict: 'E',
		scope: {},
		transclude: true,
		controller: function($scope) {
			this.active = 'Tab 1'
			this.tabs = [];
			var mv = this;
			this.addTab = function(tab) {
				this.tabs.push(tab)
			};	
			this.makeActive = function(thing){
				mv.active_tab = thing
				console.log(mv.active_tab)
			}
		},
		controllerAs: 'tabs',
		template: [
			'<div class="tabs">',
				'<ul class="tabs__list" ><li ng-repeat="tab in tabs.tabs" ng-click="tabs.makeActive(tab)">{{ tab }}</li></ul>',
				'<div class="tabs__content" ng-transclude>',
				'</div>',
				'</div>'
		].join('')
	}
}

angular
	.module('app')
	.directive('tabs', Tabs)