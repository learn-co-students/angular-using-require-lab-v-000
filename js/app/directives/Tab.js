function Tab() {
	return {
		restrict: 'E',
		scope: {
			label: '@'
			// from the view <tab label="Tab 1">
		},
		require: '^tabs',
		transclude: true,
		template: [
    	    '<div class="tabs__content" ng-if="tab.selected">',
      	        '<div ng-transclude></div>',
            '</div>'
            // will go inside of <tab label="Tab 1">
		].join(''),
		link: function ($scope, $element, $attrs, $ctrl) {
			$scope.tab = {
				label: $scope.label,
				selected: false
			};
			$ctrl.addTab($scope.tab);
			// $ctrl is the 4th argument, given because we use 'require'
		}
	}
}


angular
	.module('app')
	.directive('tab', Tab);