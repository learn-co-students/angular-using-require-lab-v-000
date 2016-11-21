function Tab() {
	return {
		restrict: 'E',
		scope: {
			label: '@'
		},
		require: '^tabs',
		transclude: true,
		link: function ($scope, $element, $attrs, $ctrl) {
			$scope.tab = {
				label: $scope.label,
				selected: false
			};
      $ctrl.tabs.push($scope.tab);
      $ctrl.selectTab(0);
		},
    template: [
      '<div ng-transclude ng-if="tab.selected"></div>',
      '</div>'
    ].join('')
	}
}

angular
	.module('app')
	.directive('tab', Tab);
