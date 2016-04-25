function Tab(){
  return {
    scope: {
      label: '@'
    },
    template: [
      '<div class="tabs__content" ng-if="tab.selected">',
        '<div ng-transclude></div>',
      '</div>'
    ].join(''),
    require: '^tabs',
    restrict: 'E',
    scope: {},
    transclude: true,
    link: function($scope, $element, $attrs, $ctrl){
      $scope.tab = {
        label: $scope.label,
        selected: false
      };
      $ctrl.addTab($scope.tab);
    }
  }
}

angular
  .module('app')
  .directive('tab', Tab)
