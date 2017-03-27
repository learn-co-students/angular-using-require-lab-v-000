function Tab() {
	return {
		template: [
			'<div class="tabs__content" ng-show="tab.active">',
			'<div ng-transclude></div>',
			'</div>'
		].join(''),
		scope: {
			label: "@"
		},
		require: '^tabs',
		transclude: true,
		controller: function($scope) {
			this.active = true
		},
		controllerAs: 'tab',
		link: function($scope, $element, $attrs, $ctrl) {
			$ctrl.addTab($scope.label)
		}
	}
}

angular
	.module('app')
	.directive('tab', Tab)
	.directive('tabs', tabs)
