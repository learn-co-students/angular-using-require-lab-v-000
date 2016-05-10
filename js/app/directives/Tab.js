function Tab() {
	return {
		restrict: "E",
		scope: {
			label: '@'
		},
		transclude: true,
		require: '^tabs',
    template: [
      '<div class="tabs__content" ng-show="selected">',
        '<div ng-transclude></div>',
      '</div>'
    ].join(''),
    link: function ($scope, $element, $attrs, $ctrl) {	
    	$ctrl.addTab($scope);
    }
  };
}

angular
	.module('app')
	.directive('tab', Tab)
	