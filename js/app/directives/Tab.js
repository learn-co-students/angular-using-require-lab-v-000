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
        "<div ng-transclude ng-show='selected'></div>",
        // "<div ng-show='sel'>parent</div>",
      "</li>"
      ].join(""),
    // controller: function($scope) {
    //   // $scope.selected = true;
    //   // $scope.toggle = function() {
    //   //   $scope.selected = true;
    //   //   // this.tabs.push()
    //   // };
    // },
    // controllerAs: 'tab',
    link: function ($scope, $element, $attrs, $ctrl) {
      // $scope.sel = true;
      // $ctrl.activate($scope);
      $ctrl.addTab($scope);
      $scope.toggle = function() {
        $ctrl.activate($scope)
        // $scope.selected = true;
        // this.tabs.push()
      };
    }
  };
}
 
angular
  .module('app', [])
  .directive('tab', tab)
  .directive('tabs', tabs);