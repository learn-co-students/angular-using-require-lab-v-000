function Tab() {
	return {
		template: [
			'<div class="tabs__content" ng-show="tab.active">',
			'<div ng-transclude></div>',
			'</div>'
		].join(''),
		scope: {
			label: "@",
			active: "@"
		},
		require: '^tabs',
		transclude: true,
		controller: function($scope) {
		},
		controllerAs: 'tab',
		link: function($scope, $element, $attrs, $ctrl) {
			$scope.tab = {label: $scope.label, active: ($scope.label == "Tab 1" ? true : false)}
			$ctrl.addTab($scope.tab)
		}
	}
}

angular
	.module('app')
	.directive('tab', Tab)
