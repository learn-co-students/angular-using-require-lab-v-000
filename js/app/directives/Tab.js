function Tab() {
  return {
    restrict: 'E',
    scope: {
      label: '@'
    },
    require: '^tabs', // tell Angular to require the parent controller from our tabs component
    transclude: true,
    template: [
      '<div class="tabs__content" ng-if="tab.selected">',
        '<div ng-transclude></div>',
      '</div>'
    ].join(''),
    link: function ($scope, $element, $attrs, $ctrl) {
      // $ctrl is equal to the parent controller, tabs, and allows us to access everything to do with it
      $scope.tab = {
        label: $scope.label,
        selected: false
      }
      $ctrl.addTab($scope.tab)
    }
  }
}

angular
  .module('app')
  .directive('tab', Tab)