angular
  .module('app')
  .directive('tab', tab);
  
function tab() {
  return {
    restrict: 'E', 
    scope: {
      label: '@'
    },
    require: '^tabs', 
    transclude: true, 
    template: [
      '<div class="tabs__content" ng-show="tab.active">', 
        '<div ng-transclude></div>', 
      '</div>'
    ].join(''), 
    link: function($scope, $element, $attrs, $ctrl) {
      $scope.tab = {
        label: $scope.label,
        active: false
      };
      $ctrl.addTab($scope.tab);
    }
    
  };
}