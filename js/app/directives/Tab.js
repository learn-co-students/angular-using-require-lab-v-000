function Tab() {
	return {
		restrict: 'E',
	    scope: {
	      label: '@'
	    },
	    require: '^tabs',
	    transclude: true,	    
		templateUrl: 'js/app/views/tab.html',
		link: function ($scope, $element, $attrs, $ctrl) {
			$scope.tab = {
				label: $scope.label,
				selected: false
			};
			$ctrl.addTab($scope.tab);
			$ctrl.selectTab($attrs.active || 0);        	
    	}		
	}
}

angular
	.module('app')
	.directive('tab', Tab);