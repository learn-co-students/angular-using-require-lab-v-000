function Tabs() {
	return {
		restrict: 'E',
		scope: {},
		transclude: true,
		controller: function() {
			this.tabs = [],
			this.addTab = function(tab) {
				this.tabs.push(tab);
			};
			var vm = this;
			this.selectTab = function(index) {
				vm.tabs.forEach(function(elem){
					elem.selected = false

				});
				vm.tabs[index].selected = true;
			};
		},
		link: function ($scope, $element, $attrs, $ctrl) {
			$ctrl.selectTab($attrs.active || 0);
		},
		template: [
      		'<div class="tabs">',
	        	'<ul class="tabs__list">',
	          	    '<li ng-repeat="tab in tabs.tabs">',
	            	    '<a href="" ng-bind="tab.label" ng-click="tabs.selectTab($index);"></a>',
	                '</li>',
	            '</ul>',
        		'<div class="tabs__content" ng-transclude></div>',
        	'</div>'
    	].join(''),
		controllerAs: 'tabs'
	};
}

angular
	.module('app')
	.directive('tabs', Tabs);