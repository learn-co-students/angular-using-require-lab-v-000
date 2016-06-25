function Tab() {
  return {
    require: '^tabs',
    scope: {
      label: '@'
    },
    transclude: true,
    template: [
      '<div class="tabs__content" ng-if="tab.selected">',
       '<div ng-transclude></div>',
      '</div>'
    ].join(''),
    restrict: 'E',
    link: function($scope, $element, $attrs, $ctrl) {
      $scope.tab = {
        label: $scope.label,
        selected: false
      };
      $ctrl.addTab($scope.tab);
    }
  };
}

angular
      .module('app')
      .directive('tab', Tab);
