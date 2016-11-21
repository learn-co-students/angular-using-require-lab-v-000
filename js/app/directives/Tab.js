function Tab() {
  return {
    restrict: 'E',
    scope: {
      label: '@'
    },
    require: '^tabs',
    transclude: true,
    link: function($scope, $element, $attrs, $ctrl) {
      $scope.tab = {
        label: $scope.label,
        clicked: false
      };
      $ctrl.addTab($scope.tab);
    },
    template: [
      '<div class="tabs__content" ng-if="tab.clicked">',
        '<div ng-transclude></div>',
      '</div>'
    ].join('')
  };
}

angular
  .module('app')
  .directive('tab', Tab);
