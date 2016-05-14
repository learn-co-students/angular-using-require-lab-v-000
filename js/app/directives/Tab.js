function tab() {
  return {
    restrict: 'E',
    scope:{
      label: '@'
    },
    require: '^^tabs',
    transclude: true, 
    template: [
      "<li ng-click='toggle()'>{{label}}",
        "<div class='tabs__content' ng-transclude ng-show='selected'></div>",
      "</li>"
      ].join(""),
    link: function ($scope, $element, $attrs, $ctrl) {
      $ctrl.addTab($scope);
      $scope.toggle = function() {
        $ctrl.activate($scope);
      };
    }
  };
}
 
angular
  .module('app', [])
  .directive('tab', tab)
  .directive('tabs', tabs);