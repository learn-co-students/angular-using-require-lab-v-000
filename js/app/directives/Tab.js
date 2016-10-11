function tab() {
  return {
    restrict: 'E',
    scope: {
      label: '@',
      selected: '@'
    },
    require: '^tabs',
    transclude: true,
    controllerAs: 'tabs',
    template: [
      '<div class="tabs__content" ng-if="tab.selected">',
        '<div ng-transclude></div>',
      '</div>'
    ].join(''),
    link: function ($scope, $element, $attrs, $ctrl) {
      // using the tabs controller addTab function and add it to
      // tabs array
       $scope.tab = ({
         label: $scope.label,
         selected: false,
       });
      $ctrl.addTab($scope.tab);
    }
  };
}
 
angular
  .module('app', [])
  .directive('tab', tab)
  .directive('tabs', tabs);